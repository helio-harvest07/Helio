# HelioHarvest SaaS Marketing Website — PRD

## Original Problem Statement
Build a SaaS marketing website for HelioHarvest, a solar installation company. The website should talk about solar installation services, mission, and vision (from PDF). Multiple pages in English with solar energy theme and animations. Lead generation contact form with phone number +91 90923 79023.

## Architecture

### Frontend (React)
- React Router with 4 pages: Home, About, Services, Contact
- Tailwind CSS with custom solar brand colors (#F59E0B orange, #1E3A8A blue, #FACC15 yellow, #0F172A dark)
- Fonts: Outfit (headings) + Inter (body) from Google Fonts
- Components: Navbar, Footer, SolarFlowAnimation

### Backend (FastAPI + MongoDB)
- POST /api/leads — saves lead inquiries to MongoDB
- GET /api/leads — retrieves all leads

### Database
- MongoDB collection: `leads` (name, email, phone, address, message, created_at)

## What's Been Implemented (as of Feb/Mar 2026)

### Pages
- **Home** — Hero with Tata Power solar panel image, stats bar, Mission & Vision (with all 3 product names), Services preview, HelioHarvest Product Ecosystem (3 platform cards), Why HelioHarvest features, Testimonials, India Coverage section (30 state/city badges + pan-India stats), CTA banner
- **About** — Company story, milestones timeline, detailed Mission & Vision, Core Values
- **Services** — 3 service cards (Installation, Monitoring, AMC), How It Works 4-step process, Benefits stats, Monitoring feature section
- **Contact** — Lead form with WhatsApp integration, Contact info with office address, What Happens Next guide

### Components
- **Navbar** — Transparent-to-solid scroll effect, mobile hamburger menu, phone number, CTA button
- **Footer** — Dark navy, links, contact info with Coimbatore address, social icons
- **SolarFlowDiagram** — Updated (Dec 2025): Tata Power solar panel image background with header legend

### WhatsApp Lead Notification (Dec 2025)
- After form submission, "Send to WhatsApp" button appears
- Pre-fills WhatsApp message with lead details (name, email, phone, address, message)
- Opens wa.me link to send directly to +91 9092379023

### Backend
- FastAPI with `/api/leads` POST and GET endpoints
- MongoDB storage via Motor (async)
- CORS configured

### Products Mentioned
- **HelioHarvest SaaS** — Real-time monitoring, Proactive alerts, Digital Vault, Carbon compliance
- **Solar Co-Pilot** — VR Digital Twin, AI satellite design, Smart procurement
- **Energy Exchange** — P2P Marketplace, VPP orchestration, Carbon credits

## User Personas
- Homeowners in India (Tamil Nadu, Gujarat, Rajasthan) looking for solar installation
- Business owners seeking commercial solar solutions
- Anyone looking to reduce electricity bills by 40%

## Core Requirements (Static)
- Company name: HelioHarvest
- Contact: +91 90923 79023
- Services: Solar Installation (primary), Energy Monitoring, AMC
- Mission: Transforming raw energy data into automated action
- Vision: Powering the renewable revolution, one distributed asset at a time
- Language: English only
- Theme: Solar (orange #F59E0B, deep blue #1E3A8A, yellow #FACC15)

## Prioritized Backlog

### P0 (Done)
- [x] Homepage with hero + animation
- [x] About, Services, Contact pages
- [x] Lead form with backend storage
- [x] Navbar + Footer
- [x] Solar energy flow animation

### P1 (Next)
- [ ] Admin dashboard to view/manage leads
- [ ] Email notification on new lead submission (Resend/SendGrid)
- [ ] WhatsApp integration for instant lead alerts
- [ ] Google Analytics integration
- [ ] SEO meta tags

### P2 (Future)
- [ ] Blog/resources section
- [ ] Solar savings calculator (interactive)
- [ ] Customer portal with monitoring dashboard
- [ ] Multi-language support (Hindi)
- [ ] Case studies / project gallery

## Next Tasks
1. Add email notifications for new leads
2. Build lead management admin panel
3. Add solar savings calculator widget
4. SEO optimization (meta tags, sitemap)
