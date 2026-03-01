from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime, timezone
import uuid

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    address: Optional[str] = None
    message: Optional[str] = None


class Lead(LeadCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "HelioHarvest API running"}


@api_router.post("/leads")
async def create_lead(lead: LeadCreate):
    lead_obj = Lead(**lead.model_dump())
    doc = lead_obj.model_dump()
    await db.leads.insert_one(doc)
    return {"success": True, "message": "Thank you! We'll contact you within 24 hours."}


@api_router.get("/leads")
async def get_leads():
    leads = await db.leads.find({}, {"_id": 0}).to_list(1000)
    return leads


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
