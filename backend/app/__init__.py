import os
from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from werkzeug.exceptions import HTTPException

from .extensions import mail_ext
from .db import init_db

def create_app():
    load_dotenv()
    app = Flask(__name__)

    # Configs
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret")
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET", os.getenv("JWT_SECRET_KEY", app.config["SECRET_KEY"]))
    app.config["MONGO_URI"] = os.getenv("MONGO_URI", "mongodb://localhost:27017/tech_marketplace")
    
    # Resolve dynamic URLs if running on Vercel
    vercel_url = os.getenv("VERCEL_URL")
    default_base_url = f"https://{vercel_url}" if vercel_url else "http://localhost:5000"
    default_frontend_url = f"https://{vercel_url}" if vercel_url else "http://localhost:8080"
    
    app.config["APP_BASE_URL"] = os.getenv("APP_BASE_URL", default_base_url)
    app.config["MAIL_SENDER"] = os.getenv("MAIL_SENDER", "no-reply@example.com")
    
    # Default Contact Information
    app.config["CONTACT_PERSON"] = os.getenv("CONTACT_PERSON", "Mr. Raghuraj")
    app.config["CONTACT_PHONE"] = os.getenv("CONTACT_PHONE", "+91 9849258028")
    app.config["CONTACT_EMAIL"] = os.getenv("CONTACT_EMAIL", "raghuraj@hotmail.com")

    # Flask-Mail SMTP configuration
    app.config["MAIL_SERVER"] = os.getenv("MAIL_SERVER", "localhost")
    app.config["MAIL_PORT"] = int(os.getenv("MAIL_PORT", "587"))
    app.config["MAIL_USE_TLS"] = os.getenv("MAIL_USE_TLS", "True").lower() in ("true", "1", "t")
    app.config["MAIL_USE_SSL"] = os.getenv("MAIL_USE_SSL", "False").lower() in ("true", "1", "t")
    app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")
    app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")
    app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_SENDER", "no-reply@example.com")

    app.config["RAZORPAY_KEY_ID"] = os.getenv("RAZORPAY_KEY_ID", "")
    app.config["RAZORPAY_KEY_SECRET"] = os.getenv("RAZORPAY_KEY_SECRET", "")
    app.config["RAZORPAY_WEBHOOK_SECRET"] = os.getenv("RAZORPAY_WEBHOOK_SECRET", "")

    app.config["STORAGE_BACKEND"] = os.getenv("STORAGE_BACKEND", "local").lower()
    
    # Enable tmp directory storage if running on Vercel's read-only file system
    if os.getenv("VERCEL") == "1":
        app.config["UPLOAD_FOLDER"] = "/tmp"
    else:
        app.config["UPLOAD_FOLDER"] = os.getenv("UPLOAD_FOLDER", "app/uploads")

    app.config["RATE_LIMIT_LOGIN_PER_MIN"] = int(os.getenv("RATE_LIMIT_LOGIN_PER_MIN", "10"))
    app.config["RATE_LIMIT_REGISTER_PER_MIN"] = int(os.getenv("RATE_LIMIT_REGISTER_PER_MIN", "5"))
    app.config["FRONTEND_URL"] = os.getenv("FRONTEND_URL", default_frontend_url)

    # Max upload size: 50 MB (prevents Flask from hanging on very large uploads)
    app.config["MAX_CONTENT_LENGTH"] = 50 * 1024 * 1024

    # upload configurations
    app.config["ALLOWED_IMAGE_EXTS"] = {"png","jpg","jpeg","webp","gif"}
    app.config["ALLOWED_ARTIFACT_EXTS"] = {"zip","pdf","csv","sql","db","sqlite","txt","doc","docx","ppt","pptx","ipynb","py","java","c","cpp","js","json"}
    app.config["MAX_UPLOAD_MB"] = 25

    # Initialize extensions and DB
    init_db(app)
    mail_ext.init_app(app)

    # Enable CORS for restricted domains (localhost, frontend URL, and dynamic Vercel domains)
    allowed_origins = [
        "http://localhost:8080",
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:5000",
        r"https://.*\.vercel\.app"
    ]
    configured_frontend = app.config.get("FRONTEND_URL")
    if configured_frontend and configured_frontend not in allowed_origins:
        allowed_origins.append(configured_frontend)
        
    CORS(
        app,
        resources={r"/api/*": {
            "origins": allowed_origins,
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }},
        supports_credentials=True
    )

    @app.route("/health")
    @app.route("/api/health")
    def health_check():
        return jsonify({"status": "running"}), 200

    # Register standard blueprints
    from .routes.auth import bp as auth_bp
    from .routes.projects import bp as projects_bp
    from .routes.categories import bp as categories_bp, categories_collection_bp
    from .routes.reviews import bp as reviews_bp
    from .routes.wishlist import bp as wishlist_bp
    from .routes.payments import bp as payments_bp
    from .routes.webhooks import bp as webhooks_bp
    from .routes.admin import bp as admin_bp
    from .routes.main import bp as main_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(projects_bp, url_prefix="/api/projects")
    app.register_blueprint(categories_bp, url_prefix="/api/domains", name="domains")
    app.register_blueprint(categories_collection_bp, url_prefix="/api/categories")
    app.register_blueprint(reviews_bp, url_prefix="/api/reviews")
    app.register_blueprint(wishlist_bp, url_prefix="/api/wishlist")
    app.register_blueprint(payments_bp, url_prefix="/api")
    app.register_blueprint(admin_bp, url_prefix="/api/admin")
    app.register_blueprint(webhooks_bp, url_prefix="/api/webhooks")
    app.register_blueprint(main_bp, url_prefix="/api")

    # Global JSON error handling
    @app.errorhandler(Exception)
    def handle_exception(e):
        if isinstance(e, HTTPException):
            return jsonify({"error": e.description}), e.code
        app.logger.exception("Unhandled application error occurred")
        return jsonify({"error": "Internal Server Error"}), 500

    return app
