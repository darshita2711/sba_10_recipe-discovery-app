# Recipe Discovery App

## Project Description

Recipe Discovery App is a React and TypeScript application that helps users discover recipes using TheMealDB API. Users can explore food categories, search for meals, view recipe details, and save their favorite recipes.

## Features

- Browse different food categories.
- Search for recipes by name.
- View recipe images, ingredients, measurements, and cooking instructions.
- Add and remove favorite recipes.
- Save favorite recipes using Local Storage.
- Navigate between pages using React Router.
- Responsive design for different screen sizes.
- Loading and error handling for API requests.

## Technologies Used

- React
- TypeScript
- Vite
- React Router DOM
- Context API
- Custom Hooks
- CSS3
- TheMealDB API
- Local Storage

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd recipe-discovery-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

`http://localhost:5173`

## Reflection

### Most Challenging Part

The most challenging part of this project was managing data across different components, especially implementing the favorites feature. I needed to understand how Context API and Local Storage work together so that users could save recipes and keep their favorites even after refreshing the page.

Working with API requests and handling loading and error states was also a valuable learning experience.

### Design Decision

I decided to use a custom `useFetch` hook to handle API requests, loading states, and errors in one reusable place. This helped avoid repeating the same fetching logic in multiple components.

I also used Context API to manage favorite recipe IDs across the application and a custom `useLocalStorage` hook to persist them in the browser. This made the favorites feature easier to manage and share between pages.

---

**Author:** Darshita Vaghela