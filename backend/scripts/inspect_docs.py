import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv(override=False)
mongo_uri = os.getenv("MONGO_URI")
if not mongo_uri:
    raise ValueError("MONGO_URI environment variable is missing.")
if not mongo_uri.startswith("mongodb"):
    raise ValueError("Invalid MONGO_URI format.")

print("Connecting to MongoDB...")
client = MongoClient(
    mongo_uri,
    serverSelectionTimeoutMS=5000,
    connectTimeoutMS=5000,
    socketTimeoutMS=5000
)
# Force initial connection check
client.admin.command("ping")

try:
    db = client.get_default_database()
except Exception:
    db = client["tech_marketplace"]

print(f"Using database: {db.name}")

print("--- CATEGORIES ---")
for cat in db["categories"].find():
    print(cat)

print("\n--- PROJECTS ---")
for proj in db["projects"].find():
    print(proj)
