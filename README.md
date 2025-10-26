# TicketApp – Vue.js Implementation

This repository contains the **Vue.js version** of the Multi-Framework Ticket Management Web App, part of the Frontend Stage 2 assignment. The app provides a fully functional ticket system with authentication, dashboard, and CRUD operations for tickets.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Frameworks & Libraries Used](#frameworks--libraries-used)
4. [Setup & Installation](#setup--installation)
5. [Running the App](#running-the-app)
6. [UI & State Structure](#ui--state-structure)
7. [Authentication & Protected Routes](#authentication--protected-routes)
8. [Accessibility Considerations](#accessibility-considerations)
9. [Test User Credentials](#test-user-credentials)
10. [Known Issues](#known-issues)

---

## Project Overview

TicketApp is a **robust ticket management system** built in Vue.js. Users can:

- Log in and sign up (simulated via `localStorage` session token)
- View a dashboard with ticket statistics
- Manage tickets with full **CRUD** functionality (Create, Read, Update, Delete)
- Receive **real-time feedback** via inline messages and toast notifications

The layout follows a **consistent design language** used across React and Twig implementations:

- Wave hero section on landing page
- Decorative circles and card-style components
- Max-width of 1440px, fully responsive design
- Color-coded ticket statuses: Open (Green), In Progress (Amber), Closed (Gray)

---

## Features

- **Landing Page:** Hero section with wave SVG, decorative elements, responsive layout
- **Authentication:** Login & Signup forms, validation, and simulated session token
- **Dashboard:** Stats overview (Total, Open, In Progress, Closed tickets)
- **Ticket Management Screen:** Full CRUD, validation, confirmation prompts, toast notifications
- **Responsive Design:** Works across mobile, tablet, and desktop devices
- **Accessibility:** Semantic HTML, alt text, visible focus states, sufficient color contrast

---

## Frameworks & Libraries Used

- **Vue.js 3** (Composition API)
- **Vue Router** (for routing and protected routes)
- **Pinia** (optional for state management, or local component state)
- **LocalStorage** (for authentication simulation and storing tickets)

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone <your-vue-repo-url>
cd ticketapp-vue
```

2. **Install dependencies**

```bash
 npm install
```

3. **Start development server**

```bash
 npm run dev

```
