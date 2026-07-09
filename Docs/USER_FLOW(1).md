# USER_FLOW.md

## Freelance Agency Website

Companion to PRD.md, TRD.md, DESIGN.md and DATABASE.md.

## 1. Visitor Journey

```mermaid
flowchart LR
A[Landing]-->B[Services]
A-->C[Work]
A-->D[About]
A-->E[Process]
A-->F[Contact]
F-->G[Lead Submitted]
G-->H[Confirmation]
```

**Landing**

- Hero with primary CTA: **Book a Discovery Call**
- Secondary CTA: **View Case Studies**
- Scroll to Services, Process, Testimonials, FAQ.

Navigation:

- Logo → Home
- Services
- Work
- Process
- About
- Contact

---

## 2. Service Discovery

```mermaid
flowchart TD
Services-->ServiceDetail
ServiceDetail-->CaseStudies
CaseStudies-->Contact
```

Buttons:

- Learn More
- Start Project
- View Related Work

---

## 3. Portfolio / Case Study

```mermaid
flowchart TD
Portfolio-->CaseStudy
CaseStudy-->NextCase
CaseStudy-->Contact
```

Screen sections:
Overview → Challenge → Solution → Results → Tech Stack → Testimonial → CTA.

Buttons:

- View Live
- Next Project
- Start Similar Project

---

## 4. Contact & Lead

```mermaid
flowchart TD
ContactForm-->Validate
Validate--Valid-->CRM
CRM-->Success
Validate--Invalid-->Errors
```

Fields:
Name, Email, Company, Budget, Timeline, Services, Message.

Buttons:

- Submit Inquiry
- Schedule Call

---

## 5. Discovery Call

```mermaid
flowchart TD
BookCall-->Calendar
Calendar-->Confirm
Confirm-->EmailConfirmation
```

---

## 6. Authentication (Admin)

```mermaid
flowchart TD
Login-->2FA
2FA-->Dashboard
Login-->ForgotPassword
ForgotPassword-->Reset
```

Buttons:
Login, Forgot Password, Reset Password, Logout.

---

## 7. Admin Dashboard

```mermaid
flowchart LR
Dashboard-->Leads
Dashboard-->Projects
Dashboard-->Services
Dashboard-->Testimonials
Dashboard-->Blog
Dashboard-->Settings
```

Widgets:

- New Leads
- Conversion Rate
- Recent Activity
- Website Metrics

---

## 8. Lead Management

```mermaid
flowchart TD
LeadList-->LeadDetails
LeadDetails-->Assign
Assign-->Qualified
Qualified-->Won
Qualified-->Lost
```

Buttons:
Assign, Archive, Email, Mark Won, Mark Lost.

---

## 9. Content Management

```mermaid
flowchart TD
Content-->Create
Create-->Draft
Draft-->Preview
Preview-->Publish
Publish-->Live
```

For Services, Case Studies, Blog and FAQ.

---

## 10. Settings

```mermaid
flowchart LR
Settings-->General
Settings-->SEO
Settings-->Team
Settings-->Integrations
Settings-->Security
```

---

## 11. Error States

```mermaid
flowchart LR
Action-->Error
Error-->Retry
Error-->Home
```

Buttons:
Retry, Back Home, Contact Support.

---

## 12. Loading States

- Skeleton hero
- Skeleton cards
- Button spinner
- Progressive image loading

---

## 13. Success States

```mermaid
flowchart LR
Submit-->Success-->Dashboard
```

Examples:

- Lead submitted
- Project published
- Settings saved

---

## 14. Empty States

- No leads
- No case studies
- No testimonials
- No blog posts

CTA:
Create New / Add Content.

---

## 15. Permission Denied

```mermaid
flowchart LR
Protected-->Unauthorized
Unauthorized-->Login
Unauthorized-->Dashboard
```

Buttons:
Login, Request Access.

## Global Navigation

Public:

- Home
- Services
- Work
- Process
- About
- Contact

Admin:

- Dashboard
- Leads
- Projects
- Content
- Analytics
- Settings
- Logout
