# To-Do List App

This project is a simple to-do list application structured using Atomic Design principles and developed with TypeScript for enhanced type safety.

## Project Structure

- **Atoms:** Basic UI components like buttons, inputs, and checkboxes.
- **Molecules:** Combinations of atoms to form task items.
- **Organisms:** Collections of molecules to form task lists.
- **Templates:** Page templates that include organisms and layout structure.
- **Pages:** Specific pages composed of templates.

## Features

- Add tasks
- Mark tasks as completed
- Remove completed tasks
- Persist tasks using local storage
- Edit task names

## Testing

### Jest
Jest is used for testing. You can run tests using:

```sh
npm test
```

## ESLint

ESLint is used for linting TypeScript code. You can run ESLint using:

```sh
npx eslint .
```

## How to Run

To run the application locally, follow these steps:

1. Install dependencies:

```sh
npm install
```

2. Start the development server:

```sh
npm start
```

Open http://localhost:3000 to view it in the browser.
