# Rodolfo Agosto — Personal Portfolio Website

Personal portfolio of Rodolfo Agosto, a Java backend developer focused on Spring Boot and REST API design. The site presents my projects, training and certifications, and is the entry point to my main project, **Lirium Nutrition Planning**.

The site is in Spanish, since it is aimed at the job market where I live (Argentina).

## What is on the site

- **Home:** about me, education and certifications (Oracle Certified Associate, Java SE), skills, projects, tutorials, blog and contact.
- **Lirium Nutrition Planning (featured):** a detail page with an index, embedded videos, architecture diagrams and screenshots. It covers the domain model, the plan generation engine, reports, security, testing strategy and the CI/CD pipeline.
- **Earlier projects:** Anavi and Auzonia, each with its own detail page, diagrams and interface screenshots.
- **Contact:** a form that sends messages through [Formspree](https://formspree.io), so no email address is exposed in the page.
- **Tutorials and blog:** cards marked as "under construction" until the content is published.

## Featured project

**[Lirium Nutrition Planning](https://github.com/RodolfoAgosto/lirium-nutrition-planning)** is a Spring Boot REST API (Java 21) that generates weekly meal plans that respect each patient's dietary restrictions, and measures how well the patient follows them. It uses PostgreSQL with Flyway, Redis, JWT and Google OAuth2, and has an automated test suite, static analysis and a CI/CD pipeline.

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 19, Material UI 7 |
| Routing | React Router 7 (client-side routing) |
| Build | Create React App (`react-scripts` 5) |
| Animation and media | Framer Motion, React Slick, YouTube embeds |
| Icons | MUI Icons, React Icons |
| Code quality | ESLint, Prettier |
| Hosting | Vercel |

## Project structure

```
src/
├── components/   # Reusable UI and per-project components (Anavi, Auzonia, Projects, ...)
├── context/      # Navigation state shared across the layout
├── data/         # Content data (Lirium page sections and links)
├── hooks/        # Custom hooks (active section tracking)
├── layouts/      # Sidebar layout
├── pages/        # Home and project detail pages
└── styles/       # MUI theme
public/
├── assets/       # Images and diagrams
└── docs/         # Project documentation (PDF and Enterprise Architect files)
```

## Getting started

Requirements: Node.js 18 or later and npm.

```bash
git clone https://github.com/RodolfoAgosto/website-frontend.git
cd website-frontend
npm install
npm start
```

The app runs at <http://localhost:3000>.

### Production build

```bash
npm run build
```

The optimized output is generated in the `build/` folder.

## Deployment

The site is deployed on Vercel. Since the app uses `BrowserRouter`, `vercel.json` rewrites every request to `index.html`. Without that rule, reloading a nested route such as `/pages/lirium_project` would return a 404.

## Known limitations

- The default Create React App test is still in place and does not reflect the real UI. Real tests are planned.
- Some images are not yet optimized for the web.
- Migration from Create React App to Vite is planned.

## Contact

- GitHub: [RodolfoAgosto](https://github.com/RodolfoAgosto)
- LinkedIn: [rodolfo-agosto](https://www.linkedin.com/in/rodolfo-agosto/)
- YouTube: [@RodolfoJavierAgosto](https://www.youtube.com/@RodolfoJavierAgosto)
- Contact form: available in the Contact section of the site.
