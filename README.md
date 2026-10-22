# Cihanser Çalışkan, portfolio

Personal portfolio at https://cihanserc.github.io/resume, in English and Turkish.

The hero draws my career as a job-shop schedule (Gantt chart): each row is a "machine" (work, research, education) and each bar a "job". It nods to my research on genetic algorithms for scheduling.

The header has a language switch (EN/TR) and a light/dark mode toggle; both choices are remembered.

## Editing content

All text and data live in [`src/content.js`](src/content.js):

- `schedule`: dates for every bar in the career chart (`end: null` means ongoing)
- `projects`: project links and stacks
- `copy.en` / `copy.tr`: every piece of text, in both languages

Update `NOW` in the same file to move the "today" line.

## Development

```bash
npm install
npm run dev      # http://localhost:3000/resume/
npm run build    # outputs to dist/
```

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.

## Stack

React 18, Vite, plain CSS. Fonts: Newsreader and Schibsted Grotesk (Google Fonts).
