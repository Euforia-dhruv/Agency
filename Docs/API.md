# API.md

## Freelance Agency Website API Specification

Companion to PRD.md, TRD.md, DATABASE.md and USER_FLOW.md.

## Standards

- Base URL: `/api/v1`
- Content-Type: `application/json`
- Auth: Supabase JWT (Bearer)
- Validation: Zod
- IDs: UUID v4

### Response Envelope

```json
{
  "success": true,
  "data": {},
  "error": null,
  "meta": {}
}
```

## Authentication

| Endpoint              | Method | Auth   |
| --------------------- | ------ | ------ |
| /auth/login           | POST   | Public |
| /auth/logout          | POST   | User   |
| /auth/refresh         | POST   | User   |
| /auth/forgot-password | POST   | Public |
| /auth/reset-password  | POST   | Token  |

Example:

POST /api/v1/auth/login

Request:

```json
{ "email": "admin@example.com", "password": "StrongPassword123!" }
```

Response:

```json
{ "success": true, "data": { "accessToken": "jwt", "user": { "role": "admin" } } }
```

## Public APIs

### GET /services

List services.

Query:

- page
- limit
- sort
- search

### GET /services/{slug}

Service details.

### GET /projects

Supports:

- page
- limit
- featured
- technology
- industry
- sort=newest

### GET /projects/{slug}

### GET /testimonials

### GET /blog

Filters:

- category
- tag
- author

### GET /faq

### POST /contact

Request

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Acme",
  "budget": "5000-10000",
  "timeline": "1 month",
  "services": ["Website Design"],
  "message": "Let's build a new site."
}
```

Response

```json
{
  "success": true,
  "data": { "leadId": "uuid", "status": "received" }
}
```

Validation:

- required fields
- email format
- message 20-5000 chars

Rate limit:

- 5 requests/hour/IP

## Admin APIs

Requires Owner/Admin.

### GET /admin/leads

### GET /admin/leads/{id}

### PATCH /admin/leads/{id}

### DELETE /admin/leads/{id}

### GET /admin/projects

### POST /admin/projects

### PATCH /admin/projects/{id}

### DELETE /admin/projects/{id}

### GET /admin/services

### POST /admin/services

### PATCH /admin/services/{id}

### GET /admin/testimonials

### POST /admin/testimonials

### GET /admin/blog

### POST /admin/blog

### PATCH /admin/blog/{id}

### GET /admin/settings

### PATCH /admin/settings

## Pagination

```
?page=1&limit=12
```

Response meta:

```json
{ "meta": { "page": 1, "limit": 12, "total": 120, "pages": 10 } }
```

## Filtering

Examples:

- ?featured=true
- ?industry=Healthcare
- ?technology=Next.js
- ?status=published

## Sorting

- sort=newest
- sort=oldest
- sort=title
- order=asc|desc

## Errors

400 Validation
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Entity
429 Too Many Requests
500 Server Error

Example:

```json
{
  "success": false,
  "error": { "code": "VALIDATION_ERROR", "message": "Invalid email" }
}
```

## Caching

Public GET:

- Cache-Control: public,max-age=60,stale-while-revalidate=300

Admin:

- no-store

## Webhooks

### POST /webhooks/stripe

Verify signature.

### POST /webhooks/resend

### POST /webhooks/deploy

All return:

```json
{ "received": true }
```

## Security

- HTTPS
- JWT
- RBAC
- Zod validation
- CSRF protection
- Cloudflare rate limiting
- Audit logging

## OpenAPI Tags

- Auth
- Services
- Projects
- Blog
- Testimonials
- Contact
- Leads
- Settings
- Admin
- Webhooks
