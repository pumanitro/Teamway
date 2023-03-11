# Teamway

⚠ ReactQueryDevtools are turn on in development mode. Don't be surprised with some opened additional window.

## Technological stack

### Frontend

- React
- Typescript
- CRA (Create React App)
- react-query (to handle async data + caching)
- axios
- react-router-dom
- MUI (Material UI) (for styling)
- eslint + prettier + husky (because I love clean code <3)

### Backend

- Node.js
- Typescript
- Express
- inMemoryDB (for storing data) - done as pure JS Map()

## How to run project in dev mode

### Frontend

#### ENVs required

`.env` file in root directory

> REACT_BASE_URL=

1. `yarn install` in root directory
2. `yarn start` in root directory

> Frontend runs on `http://localhost:3000`

### Backend

1. `yarn install` in `server` directory
2. `yarn build` in `server` directory
3. `yarn dev` in `server` directory

> Backend runs on `http://localhost:7777`

## Directories structure

- /server - backend
- /server/api-routes - routes for API (endpoints definitions)
- /server/services - services for API (could be reused between services or routes)
- /src - frontend
- /src/pages - component responsible for given url adress like /home -> Home.tsx component
- /src/components - reusable components
- /src/utils - utilities functions like axios instance
- /sharedTypes - shared types between frontend and backend

## Styling guide

Longer styles or potentially reuseable should be extracted to separated file.styles.ts. On the other hand smaller styles can be done with inline styles os sx MUI because it uses emotion (css-in-js) under the hood.

## Not done but nice to have

[ ] authentication on backend + frontend to access API

## Available Scripts BE (Backend)

### `yarn build`

Compiles the typescript files to javascript files in `dist` directory

### `yarn start`

Runs the compiled javascript files in `dist` directory

### `yarn dev`

Runs the compiled javascript files in `dist` directory with nodemon and typescript watch mode

## Available Scripts FE (Frontend)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
