import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Backend API tests for HelioHarvest leads endpoint

class TestHealth:
    def test_api_root(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert r.json().get("message") == "HelioHarvest API running"

class TestLeads:
    def test_create_lead(self):
        payload = {
            "name": "TEST_John Solar",
            "email": "test_john@example.com",
            "phone": "+91 9999999999",
            "address": "123 Sun Street",
            "message": "Interested in solar installation"
        }
        r = requests.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data.get("success") is True
        assert "contact you" in data.get("message", "")

    def test_create_lead_missing_optional_fields(self):
        payload = {
            "name": "TEST_Jane",
            "email": "test_jane@example.com",
            "phone": "+91 8888888888"
        }
        r = requests.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 200
        assert r.json().get("success") is True

    def test_create_lead_invalid_email(self):
        payload = {
            "name": "TEST_Bad Email",
            "email": "not-an-email",
            "phone": "1234567890"
        }
        r = requests.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 422

    def test_get_leads(self):
        r = requests.get(f"{BASE_URL}/api/leads")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        # Verify no _id in response
        if data:
            assert "_id" not in data[0]

    def test_lead_persistence(self):
        payload = {
            "name": "TEST_Persist Check",
            "email": "test_persist@example.com",
            "phone": "+91 7777777777",
            "message": "Persistence test"
        }
        requests.post(f"{BASE_URL}/api/leads", json=payload)
        r = requests.get(f"{BASE_URL}/api/leads")
        assert r.status_code == 200
        leads = r.json()
        names = [l.get("name") for l in leads]
        assert "TEST_Persist Check" in names
