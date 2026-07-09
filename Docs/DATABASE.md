# Database Design Document

## Freelance Agency Website

> Companion document to DESIGN.md, PRD.md and TRD.md.
> This document defines the production database architecture for the agency platform.
> The existing DESIGN.md remains the single source of truth for visual design.

---

# 1. Overview

**Database:** PostgreSQL (Supabase)
**ORM:** Prisma
**Primary Key Strategy:** UUID v4
**Soft Deletes:** `deleted_at`
**Timestamps:** `created_at`, `updated_at`

## Design Principles

- Normalize business data.
- Denormalize only for performance.
- UUID primary keys.
- JSONB for flexible metadata.
- Row Level Security on every table.
- Audit every admin mutation.

---

# 2. Core Schemas

- auth
- public
- storage
- analytics
- audit

---

# 3. Tables

## users

| Field      | Type        |
| ---------- | ----------- |
| id         | uuid PK     |
| email      | text unique |
| name       | text        |
| avatar     | text        |
| role_id    | uuid        |
| created_at | timestamptz |
| updated_at | timestamptz |
| deleted_at | timestamptz |

## roles

Owner, Admin, Editor, Viewer

## permissions

role_id • resource • action

## clients

id, company_name, website, industry, logo, contact_name, email, phone, status

## services

title, slug, description, icon, featured, display_order

## projects

title, slug, client_id, challenge, solution, results, cover_image, featured

## project_technologies

project_id, technology_id

## technologies

name, icon, website

## testimonials

client_id, project_id, author, role, company, rating, quote

## leads

name, email, company, phone, budget, timeline, message, status, score

## meetings

lead_id, meeting_date, meeting_url, notes

## blog_posts

title, slug, excerpt, content, published_at

## blog_categories

name, slug

## blog_tags

name, slug

## media

filename, bucket, mime_type, width, height, size

## navigation

title, href, order

## footer_links

section, label, href

## faqs

question, answer, display_order

## settings

site_name, logo, seo, socials

## audit_logs

user_id, action, resource, before, after, ip

---

# 4. Relationships

- Role → Users (1:N)
- Client → Projects (1:N)
- Project ↔ Technology (N:N)
- Project → Testimonials (1:N)
- Lead → Meeting (1:N)
- Blog → Category (N:1)
- Blog ↔ Tags (N:N)

---

# 5. Index Strategy

Indexes:

- email
- slug
- status
- featured
- published_at
- created_at
- client_id
- project_id

GIN indexes:

- JSONB metadata
- Full-text search

---

# 6. Security

- UUID PKs
- RLS enabled
- Soft deletes
- Audit logging
- Signed storage URLs
- Encrypted secrets
- Rate limiting

---

# 7. Storage Buckets

- avatars/
- team/
- projects/
- services/
- blog/
- logos/
- seo/
- documents/

---

# 8. Enums

LeadStatus:

- NEW
- CONTACTED
- QUALIFIED
- WON
- LOST

ProjectStatus:

- DRAFT
- ACTIVE
- ARCHIVED

UserRole:

- OWNER
- ADMIN
- EDITOR
- VIEWER

---

# 9. Migration Strategy

1. Initial schema
2. Seed roles
3. Seed admin
4. Seed navigation
5. Seed settings
6. Deploy migrations
7. Verify RLS
8. Run smoke tests

---

# 10. Future Tables

- invoices
- contracts
- proposals
- time_tracking
- tasks
- client_portal
- notifications
- ai_conversations
- referrals
- crm_pipeline
