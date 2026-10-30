<div align="center">

<img src="https://raw.githubusercontent.com/GhousDeveloper/waterproofing-website/6aa1a76ed15c87658f3340029be2ce1f74668109/public/assets/roof/Capture.PNG" width="100%" alt="RoofPro Roofing and Waterproofing Website"/>

# 🏠 RoofPro

### Modern Roofing & Waterproofing Solutions

**A modern, responsive web experience for roofing and waterproofing services.**

<br/>

<a href="https://github.com/GhousDeveloper/waterproofing-website">
  <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository"/>
</a>
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19"/>
<img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/Vite-Powered-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>

<br/><br/>

**Designed for performance. Built for usability. Made for the construction industry.**

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Project Preview](#-project-preview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Design System](#-design-system)
- [Developer](#-developer)

---

## 🚀 Overview

**RoofPro** is a modern roofing and waterproofing website developed to showcase construction services, highlight completed projects, and help potential customers explore available solutions.

The application combines a professional visual identity with responsive layouts, reusable React components, service-focused pages, project galleries, and customer inquiry interfaces.

Built using **React 19, TypeScript, Vite, and Tailwind CSS v4**, the project emphasizes maintainable architecture, type safety, responsive design, and a polished user experience.

### 🎯 Project Goals

- Present roofing and waterproofing services professionally.
- Showcase projects through visual galleries.
- Make service discovery simple and intuitive.
- Provide convenient inquiry and estimate interfaces.
- Deliver a consistent experience across desktop, tablet, and mobile devices.

---

## 🖼️ Project Preview

### Main Website

<div align="center">
  <img src="https://raw.githubusercontent.com/GhousDeveloper/waterproofing-website/6aa1a76ed15c87658f3340029be2ce1f74668109/public/assets/roof/Capture.PNG" width="100%" alt="RoofPro Main Website Preview"/>
  <p><em>RoofPro — Main website interface</em></p>
</div>

### Website Screenshots

<table>
  <tr>
    <td width="50%">
      <img src="https://raw.githubusercontent.com/GhousDeveloper/waterproofing-website/6aa1a76ed15c87658f3340029be2ce1f74668109/public/assets/roof/Capture2.PNG" width="100%" alt="RoofPro Website Screenshot 2"/>
      <p align="center"><b>Website Preview 02</b></p>
    </td>
    <td width="50%">
      <img src="https://raw.githubusercontent.com/GhousDeveloper/waterproofing-website/6aa1a76ed15c87658f3340029be2ce1f74668109/public/assets/roof/Capture23.PNG" width="100%" alt="RoofPro Website Screenshot 3"/>
      <p align="center"><b>Website Preview 03</b></p>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <img src="https://raw.githubusercontent.com/GhousDeveloper/waterproofing-website/6aa1a76ed15c87658f3340029be2ce1f74668109/public/assets/roof/Capture4.PNG" width="85%" alt="RoofPro Website Screenshot 4"/>
      <p><b>Website Preview 04</b></p>
    </td>
  </tr>
</table>

---

## ✨ Key Features

### 🏗️ Roofing & Waterproofing Services
Dedicated service pages designed to present available solutions and help visitors understand different service offerings.

### 📸 Project Showcase
Visual project sections that highlight completed work and provide an engaging way to explore construction projects.

### 💰 Cost Estimation Interface
A PKR-oriented estimation experience designed to help visitors explore potential project costs.

*Actual estimates depend on the application's configured pricing rules and the project requirements.*

### 📱 Responsive Design
Layouts designed to adapt to desktop, tablet, and mobile screen sizes.

### 🧩 Reusable Components
Shared UI components help maintain consistent styling and simplify future development.

### 🧭 Intuitive Navigation
Structured navigation, service discovery, and page layouts help visitors find relevant information quickly.

### 📋 Customer Inquiry Interface
Contact and estimate interfaces provide entry points for customers interested in roofing and waterproofing services.

### 🎨 Consistent Visual Identity
A construction-focused color palette, modern typography, and clear calls to action create a cohesive interface.

### ⚡ Modern Frontend Architecture
React components, TypeScript interfaces, and a Vite-powered development workflow support a maintainable codebase.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| TypeScript | Type safety and maintainability |
| Vite | Development server and build tooling |
| Tailwind CSS v4 | Utility-first styling |
| Lucide React | Interface icons |
| CSS Custom Properties | Centralized design tokens |
| History API | Client-side navigation approach |

### Typography

- **Plus Jakarta Sans** — headings and prominent text.
- **DM Sans** — body text and interface content.

---

## 📂 Project Architecture

The project follows a modular frontend structure that separates reusable components, page layouts, and website content.

```text
waterproofing-website/
│
├── public/
│   └── assets/
│       └── roof/
│           ├── Capture.PNG
│           ├── Capture2.PNG
│           ├── Capture23.PNG
│           └── Capture4.PNG
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Logo
│   │   │   ├── WaveDivider
│   │   │   ├── EstimateForm
│   │   │   └── EstimateModal
│   │   │
│   │   ├── home/
│   │   └── layout/
│   │
│   ├── data/
│   │   └── roofingData.ts
│   │
│   ├── pages/
│   │   ├── Home
│   │   ├── About
│   │   ├── Services
│   │   ├── Detail
│   │   ├── Projects
│   │   ├── Reviews
│   │   ├── Blog
│   │   └── Contact
│   │
│   └── App.tsx
│
├── package.json
├── index.html
└── README.md
```

*This is a high-level representation of the project structure. Actual filenames and directories may differ in the repository.*

---

## ⚙️ Getting Started

Follow these steps to run RoofPro locally.

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/) — a compatible Node.js version.
- [Git](https://git-scm.com/) — for version control.
- npm — included with Node.js.

### 1. Clone the Repository

```bash
git clone https://github.com/GhousDeveloper/waterproofing-website.git
```

### 2. Navigate to the Project

```bash
cd waterproofing-website
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Website

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |

*These commands assume the corresponding scripts are defined in `package.json`.*

---

## 🎨 Design System

RoofPro uses a construction-focused visual identity with a warm background, strong typography, and red accent colors.

| Design Token | Value | Purpose |
|---|---|---|
| Primary Red | `#B52F24` | Primary actions and accents |
| Deep Red | `#8F211A` | Darker accents and hover states |
| Charcoal | `#202020` | Strong text and dark elements |
| Warm Background | `#FAF7F5` | Main background surfaces |

### Design Principles

- Clear visual hierarchy.
- Consistent spacing and typography.
- Responsive page layouts.
- Reusable UI patterns.
- Readable content and accessible interaction targets.
- Conversion-focused service and inquiry interfaces.

---

## 🔧 Development & Customization

The project can be extended with additional features as the business requirements evolve.

Potential enhancements include:

- Backend-connected estimate requests.
- Customer inquiry management.
- Online appointment scheduling.
- Project management and content administration.
- Search-engine optimization improvements.
- Analytics and conversion tracking.

These are possible future enhancements, not claims that the features are already implemented.

---

## 👨‍💻 Developer

<div align="center">

### Ghulam Ghous Kalwar

**Frontend Developer | Full-Stack Developer | AI Engineer**

Building modern web applications, SaaS products, and AI-powered solutions.

<br/>

<a href="https://github.com/GhousDeveloper">
  <img src="https://img.shields.io/badge/GitHub-GhousDeveloper-181717?style=for-the-badge&logo=github" alt="GitHub Profile"/>
</a>

<a href="https://github.com/GhousDeveloper/waterproofing-website">
  <img src="https://img.shields.io/badge/Project-RoofPro-B52F24?style=for-the-badge&logo=github" alt="RoofPro Repository"/>
</a>

</div>

---

<div align="center">

### 🏠 RoofPro — Built for a Better Roofing Experience

**Designed with care. Developed with modern web technologies.**

<sub>© RoofPro Website Project · Developed by Ghulam Ghous Kalwar</sub>

<br/><br/>

<img src="https://img.shields.io/badge/Made_with-React_%26_TypeScript-3178C6?style=flat-square" alt="Made with React and TypeScript"/>

</div>
