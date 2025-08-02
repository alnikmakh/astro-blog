## Build/Lint/Test Commands

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run format`: Format the code with Prettier.

## Code Style Guidelines

- **Framework**: Astro.js
- **UI Components**: Shoelace Web Components are used.
- **Formatting**: Use Prettier (`npm run format`).
- **Imports**: Use ES module imports.
- **Naming**:
  - Components: `PascalCase.astro` (e.g., `MyComponent.astro`)
  - Pages: `kebab-case.astro` (e.g., `about-us.astro`)
  - CSS Modules: `componentName.module.css`
- **Styling**: CSS Modules are preferred for component-scoped styles. Global styles are in `src/styles/global.css`.
- **Types**: The project uses JSDoc for type annotations in JavaScript and TypeScript.
- **Error Handling**: Use standard try/catch blocks for error handling in components and pages.
- **Project Structure**:
    - `src/components`: Reusable Astro components.
    - `src/layouts`: Base page layouts.
    - `src/pages`: Site pages.
    - `src/styles`: Global stylesheets.
    - `public`: Static assets.