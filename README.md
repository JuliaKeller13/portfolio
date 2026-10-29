<div align="center">

# Julia Keller | Developer Portfolio

**Personal developer portfolio built with Angular and TypeScript.**

A responsive, bilingual website showcasing my frontend projects, technical skills and professional journey as a full-stack developer.

[**Live Portfolio**](https://juliakeller-dev.de/) · [**GitHub Profile**](https://github.com/JuliaKeller13)

![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![i18n](https://img.shields.io/badge/Languages-English%20%7C%20German-23566A)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Featured Projects](#featured-projects)
- [Backend Projects](#backend-projects)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development & Build](#development--build)
- [Credits](#credits)

---

## About

This repository contains the source code for my personal developer portfolio.

I designed and built this website to present my work with **Angular and TypeScript** and provide an accessible way to explore my projects and get in touch. My broader development work also includes **Python, Django and Django REST Framework**.

The portfolio uses a component-based Angular architecture, custom SCSS styling and translated content in English and German.

**Website:** [juliakeller-dev.de](https://juliakeller-dev.de/)

## Features

- **Responsive layout** for desktop, tablet and mobile devices
- **English and German** content using `@ngx-translate/core`
- **Project showcase** with selectable project tabs, descriptions, screenshots, live demos and source links
- **Skills overview** covering frontend and backend technologies
- **Contact form** with client-side input validation and a privacy-consent checkbox
- **Section navigation** and a mobile navigation menu
- **Custom styling and animations**, with GSAP included in the project
- **Dedicated legal-notice and not-found pages**

## Featured Projects

The portfolio currently features these four frontend projects:

| Project | Description | Links |
| --- | --- | --- |
| **DABubble** | Real-time team messaging application built with Angular and Supabase. **Team project.** | [Live demo](https://dabubble.juliakeller-dev.de/) · [GitHub](https://github.com/JuliaKeller13/DABubble) |
| **Join** | Kanban-style task management application built with Angular and Supabase. **Team project.** | [Live demo](https://join.juliakeller-dev.de/login) · [GitHub](https://github.com/JuliaKeller13/Join) |
| **El Pollo Loco** | Object-oriented 2D browser game built with JavaScript and HTML5 Canvas. | [Live demo](https://elpolloloco.juliakeller-dev.de/) · [GitHub](https://github.com/JuliaKeller13/el-pollo-loco) |
| **Pokédex** | Responsive JavaScript application with dynamic Pokémon data from PokéAPI. | [Live demo](https://pokedex.juliakeller-dev.de/) · [GitHub](https://github.com/JuliaKeller13/pokedex) |

> DABubble and Join were developed collaboratively. The respective repositories document the team members and my individual contributions.

## Backend Projects

In addition to the frontend projects displayed on the website, I have developed several backend APIs:

| Project | Focus | Repository |
| --- | --- | --- |
| **Videoflix** | Video streaming API with JWT authentication, asynchronous processing and HLS transcoding | [Backend](https://github.com/JuliaKeller13/videoflix_backend) |
| **Quizly** | AI-assisted quiz generation from YouTube content using Whisper and Gemini | [Backend](https://github.com/JuliaKeller13/quizly-backend) |
| **Coderr** | Service marketplace API with offers, orders, reviews and user profiles | [Backend](https://github.com/JuliaKeller13/coderr_backend) · [Live demo](https://coderr.juliakeller-dev.de/) |
| **KanMind** | Collaborative boards, tasks, comments and permissions with Django REST Framework | [Backend](https://github.com/JuliaKeller13/Kanmind_backend) |

These backend projects are linked here for reference; the portfolio website's current project section displays the four frontend projects listed above.

## Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | Angular 21, TypeScript |
| Styling | SCSS, HTML5, responsive layouts |
| Internationalization | `@ngx-translate/core`, `@ngx-translate/http-loader` |
| Animation | GSAP |
| Forms & Requests | Angular Reactive Forms, Angular HttpClient |
| Development | npm, Angular CLI, Git |

## Getting Started

### Prerequisites

- Node.js compatible with Angular 21
- npm

### Installation

```bash
git clone https://github.com/JuliaKeller13/portfolio.git
cd portfolio
npm install
```

### Start the development server

```bash
npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser.

> The contact form sends requests to an external mail endpoint. Running the Angular frontend locally does not set up or replace that endpoint.

## Project Structure

```text
portfolio/
├── public/
│   ├── i18n/                 # English and German translations
│   ├── icon/                 # Branding and interface icons
│   ├── imgs/                 # Portfolio and project images
│   └── skill-icons/          # Technology icons
├── src/
│   ├── app/
│   │   ├── features/
│   │   │   ├── home/
│   │   │   │   └── sections/ # Hero, About, Skills, Projects, Contact
│   │   │   ├── imprint/      # Legal notice
│   │   │   └── not-found/    # Fallback page
│   │   ├── layout/           # Navbar and footer
│   │   └── shared/           # Reusable components, directives, services
│   ├── index.html
│   └── styles.scss
├── angular.json
├── package.json
└── README.md
```

## Development & Build

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Angular development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run watch` | Rebuild when files change (development) |
| `npm test` | Run the configured Angular test command |

## Credits

**Portfolio website and implementation:** [Julia Keller](https://github.com/JuliaKeller13).

The portfolio includes links to collaborative projects, **DABubble** and **Join**. Their READMEs credit the respective teams and distinguish my contributions from the work of other contributors.

Projects completed during my training at **Developer Akademie** are credited in their individual repositories. Third-party frameworks, libraries and visual assets remain subject to their respective licenses and attribution requirements.

---

<div align="center">

[**Visit Portfolio**](https://juliakeller-dev.de/) · [**Explore GitHub**](https://github.com/JuliaKeller13)

</div>
