# SPRINT_PLAN.md

## Freelance Agency Website – Weekly Sprint Plan

Each sprint ends in a deployable increment.

---

# Sprint 1 – Project Foundation

**Goal:** Establish production-ready foundation.

**Deliverables**

- Next.js + Tailwind + shadcn setup
- Prisma + Supabase
- CI/CD
- Base design tokens

**Tasks**

- Initialize repo
- Configure linting & formatting
- Environment variables
- Database connection
- Authentication scaffold

**Dependencies**

- TRD approved
- Database schema

**Testing**

- Build passes
- Type check
- Smoke test

**Definition of Done**

- Production deploy succeeds

**Estimated Hours:** 40

**Risks**

- Environment configuration

**Git Milestone**
`v0.1.0-foundation`

---

# Sprint 2 – Marketing Website

**Goal**
Complete public marketing pages.

**Deliverables**
Home, Services, Work, About, Process, Contact, Footer

**Tasks**

- Responsive layouts
- Navigation
- SEO metadata
- Animations
- Accessibility

**Dependencies**
Design system

**Testing**
Cross-browser, Lighthouse

**Definition of Done**
All public pages deployed.

**Hours:** 45

**Risks**
SEO regressions

**Milestone**
`v0.2.0-marketing`

---

# Sprint 3 – CMS & Admin

**Goal**
Internal admin dashboard.

**Deliverables**
Dashboard, Login, RBAC, CRUD for Services, Projects, Blog.

**Tasks**

- Auth
- Forms
- Server Actions
- Media upload

**Dependencies**
Sprint 1

**Testing**
Permission testing
CRUD testing

**Definition of Done**
Admins manage content without code changes.

**Hours:** 50

**Risks**
RBAC bugs

**Milestone**
`v0.3.0-admin`

---

# Sprint 4 – Lead Management

**Goal**
Lead capture pipeline.

**Deliverables**
Contact API, Lead Dashboard, Email notifications.

**Tasks**

- Contact form
- Validation
- Resend integration
- Lead statuses

**Dependencies**
CMS

**Testing**
Spam protection
API validation

**Definition of Done**
Leads flow end-to-end.

**Hours:** 35

**Risks**
Email delivery

**Milestone**
`v0.4.0-leads`

---

# Sprint 5 – Content & SEO

**Goal**
Publishing system.

**Deliverables**
Blog, Case Studies, FAQ, Sitemap.

**Tasks**

- Rich content
- Open Graph
- Structured data
- Search

**Dependencies**
Admin CMS

**Testing**
SEO audit
Accessibility

**Definition of Done**
Content indexed correctly.

**Hours:** 40

**Risks**
Metadata issues

**Milestone**
`v0.5.0-content`

---

# Sprint 6 – Analytics & Performance

**Goal**
Optimize production readiness.

**Deliverables**
Analytics, monitoring, caching, image optimization.

**Tasks**

- PostHog/Analytics
- Sentry
- ISR
- Performance tuning

**Dependencies**
Public site

**Testing**
Lighthouse >90
Core Web Vitals

**Definition of Done**
Performance targets achieved.

**Hours:** 30

**Risks**
Third-party integration

**Milestone**
`v0.6.0-performance`

---

# Sprint 7 – QA & Launch

**Goal**
Release candidate.

**Deliverables**
Bug fixes, documentation, backups, security review.

**Tasks**

- E2E tests
- Accessibility audit
- Security audit
- Final deployment

**Dependencies**
All previous sprints

**Testing**
Unit, Integration, E2E, Manual QA

**Definition of Done**
Production launch approved.

**Hours:** 35

**Risks**
Last-minute regressions

**Milestone**
`v1.0.0`
