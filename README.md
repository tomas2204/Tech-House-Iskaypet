This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Infrastructure

- **Main Framework:** Next.js 15, React 19.
- **Package Manager:** npm.
- **Version Control:** Git.
- **Styling:** Sass.
- **Testing:** Jest and React Testing Library.
- **Useful Scripts:**
  - `npm run dev`: development environment.
  - `npm run build`: production build.
  - `npm test`, `npm run test:watch`, `npm run test:coverage`: run tests.
- **Main Configurations:**
  - `jest.config.js` and `jest.setup.js` for testing.
  - Import alias configured: `@/` points to `/src`.

## Code

- **Main Structure:**
  - `/src/components`: reusable components.
    - `/Common`: general components (Button, Modal, Navbar, Sections).
    - `/Home`: logic and UI specific to the home page.
  - `/src/pages` or `/src/app`: routes and pages.
- **Conventions:**
  - Each component in its own folder with a main file `index.tsx` and styles in `styles.scss`.
  - Unit tests in `__tests__` next to the component, using the `.test.tsx` suffix.
  - Use `@testing-library/react` for queries and event simulation.
  - Library mocks (e.g., Next.js Image) are centralized in `jest.setup.js`.
  - ![alt text](<Captura de pantalla 2025-05-27 a la(s) 6.29.24 p. m..png>)
- **Props:** Use explicitly typed props.