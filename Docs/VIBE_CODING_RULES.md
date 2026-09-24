# VIBE_CODING_RULES.md

# Freelance Agency Website

Version: 1.0
Status: Required
Applies To:

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Windsurf
- Human Developers

---

# Philosophy

This project values:

1. Simplicity
2. Maintainability
3. Readability
4. Performance
5. Accessibility
6. Consistency

Never sacrifice long-term maintainability for short-term speed.

---

# Golden Rule

Every line of code should feel like it was written by the same senior engineer.

Never generate inconsistent code.

---

# Before Writing Code

Always understand:

- PRD
- TRD
- DESIGN.md
- DATABASE.md
- API.md

Never invent features.

Never assume requirements.

---

# Architecture First

Follow the existing architecture.

Never introduce:

- new state libraries
- random dependencies
- duplicate utilities
- conflicting patterns

---

# Keep Components Small

Maximum:

150-200 lines

Split when:

- multiple responsibilities
- nested conditionals
- repeated UI
- difficult to scan

---

# File Structure

Respect project folders.

Never create random folders.

Always use existing conventions.

---

# Naming

Components

PascalCase

```
HeroSection.tsx
```

Hooks

```
useProjects.ts
```

Functions

camelCase

```
getLeadById()
```

Constants

UPPER_SNAKE_CASE

```
MAX_FILE_SIZE
```

---

# TypeScript

Always use strict typing.

Never use:

```
any
```

Prefer

```
unknown

interface

type

generics
```

---

# React Rules

Prefer:

Server Components

Only use

```
"use client"
```

when absolutely necessary.

---

# State

Prefer

Server State

↓

TanStack Query

↓

React Hook Form

↓

Local State

Avoid global state.

---

# Styling

Use

Tailwind

-

shadcn/ui

Never write inline styles.

Never hardcode colors.

Always use design tokens.

Bad

```
text-[#6366F1]
```

Good

```
text-primary
```

---

# Spacing

Only use spacing scale.

Never invent spacing.

Good

```
p-4

gap-6

space-y-8
```

Bad

```
padding:17px
```

---

# Colors

Always use semantic tokens.

Never use raw hex values.

Good

```
bg-background

text-muted

border-border
```

---

# Icons

Use Lucide React only.

No mixed icon libraries.

---

# Animations

Subtle only.

Allowed

- fade
- slide
- opacity
- scale

Avoid

- bouncing
- spinning
- excessive parallax
- long timelines

Respect

prefers-reduced-motion

---

# Accessibility

Every component must include

- keyboard support
- focus state
- aria labels
- contrast compliance
- semantic HTML

Target

WCAG 2.2 AA

---

# Forms

Use

React Hook Form

-

Zod

Every form needs

- validation
- loading state
- success state
- error state

---

# APIs

Never call database directly.

Use

Server Actions

or

API Routes

Validate everything.

---

# Database

Always use Prisma.

Never use raw SQL unless required.

Use transactions for multi-step operations.

---

# Error Handling

Never ignore errors.

Always

- catch
- log
- return user-friendly messages

---

# Logging

Log

- context
- request id
- route
- user id

Never log

passwords

tokens

secret keys

---

# Security

Always

- validate input
- sanitize HTML
- verify authorization
- verify ownership
- protect against CSRF
- rate limit public APIs

---

# Performance

Optimize

- images
- fonts
- bundle size
- lazy loading

Avoid unnecessary re-renders.

---

# SEO

Every page requires

- title
- description
- canonical
- OpenGraph
- structured data

---

# Testing

Every feature requires

Unit Test

-

Integration Test

Critical flows require

Playwright E2E

---

# Git

Commit style

```
feat:

fix:

refactor:

docs:

test:

style:

chore:
```

Small commits only.

---

# Pull Requests

Every PR must

- compile
- pass lint
- pass tests
- have screenshots
- update documentation

---

# AI Rules

The AI must NEVER

- invent APIs
- invent database fields
- change architecture
- change design language
- install unnecessary packages
- duplicate components
- ignore existing utilities

The AI SHOULD

- reuse components
- reuse hooks
- reuse utilities
- follow design tokens
- keep code consistent

---

# Code Review Checklist

Before submitting, verify:

- Builds successfully
- No TypeScript errors
- No ESLint errors
- Accessible
- Responsive
- Dark mode works
- Mobile works
- Performance maintained
- Documentation updated

---

# Definition of Done

A task is complete only if:

✓ Code is merged
✓ Tests pass
✓ Documentation updated
✓ Responsive
✓ Accessible
✓ Production deploy succeeds
✓ No console errors
✓ Lighthouse Performance ≥ 90
✓ Lighthouse Accessibility ≥ 95
✓ Lighthouse SEO ≥ 95
✓ Follows DESIGN.md, PRD.md, TRD.md, DATABASE.md, and API.md
