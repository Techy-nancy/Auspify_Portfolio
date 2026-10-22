# Auspify Portfolio

Personal portfolio for Sonia, built with React. It has four pages: Home, About, Projects, and Contact. The layout works on a wide screen and on a phone.

## What I did

- Built the site with React and Vite, and used React Router so each page has its own address.
- Home introduces me as a software engineer and shows my photo.
- About has a short background and my skills.
- Projects lists Elevate System, the Kigali City Services Directory, MediBook, and this portfolio. Each one opens a detail page.
- Contact has a form that checks the name, email, and message before it accepts them.
- Styled the site with CSS so the menu folds into a button on a small screen.

The words on the pages live in `src/data.js`.

## How to run it

You need Node.js installed.

```bash
npm install
npm run dev
```

Open http://127.0.0.1:5174

To make the production build:

```bash
npm run build
```

The built files are written to `dist`. Preview that build with:

```bash
npm run preview
```
