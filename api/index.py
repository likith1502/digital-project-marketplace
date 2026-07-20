import sys
import os

# Add backend directory to sys.path so Vercel can import Flask modules
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

from app import create_app

class VercelPathMiddleware:
    def __init__(self, wsgi_app):
        self.wsgi_app = wsgi_app

    def __call__(self, environ, start_response):
        # Extract original URI from Vercel headers
        original_uri = environ.get('HTTP_X_FORWARDED_URI') or environ.get('HTTP_X_ORIGINAL_URL')
        if original_uri:
            # Strip query string to isolate PATH_INFO
            path_only = original_uri.split('?')[0]
            environ['PATH_INFO'] = path_only
        return self.wsgi_app(environ, start_response)

app = create_app()
app.wsgi_app = VercelPathMiddleware(app.wsgi_app)
