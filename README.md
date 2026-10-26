# Kesavan Aswin E — Cybersecurity Portfolio

A responsive, editorial-style portfolio built with React and Vite. The interface uses hand-drawn cybersecurity illustrations, scroll reveals, subtle parallax, staggered entrance motion, and reduced-motion support.

## Highlights
- Responsive layout for desktop, tablet, and mobile
- Scroll-triggered reveal animations and subtle hover motion
- Respects the operating system's reduced-motion preference
- Sections for about, skills, certifications, projects, experience, research notes, and contact
- Resume PDF served from `public/Kesavan_Aswin_E_Resume.pdf`

## Run locally

Requirements: Node.js 20.19+ or 22.12+ (compatible with the Vite version in this project) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Personalize before publishing
- Review each certificate name and add verification links only when you have them.
- Update project links in `src/pages/Projects.jsx` to point to the relevant repositories.
- Review the research/publication section and remove any entry that is not formally published or publicly shareable.
- Confirm phone, email, LinkedIn, and GitHub details in `src/pages/Contact.jsx`.


## Personal documents
- `public/Kesavan_Aswin_E_Resume.pdf` — résumé download.
- `public/Kesavan_Aswin_Profile.pdf` — professional profile PDF.

Profile details were used to update the hero introduction, About section, skills, certifications, and experience. The YBI internship domain and any unverified outreach metrics were intentionally omitted because the source profile leaves them unconfirmed.
