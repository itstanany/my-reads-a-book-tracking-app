# Udacity Advanced front-end Nanodegree Project:

# My Reads - Book Tracking App

## Video Demo

A video walk through is available here: https://youtu.be/fmIIIpOau_8 including installation and app overview.

[![video installation and walk-through](./src/public/imgs/video.png)](https://youtu.be/fmIIIpOau_8)

## What We will be building

In the MyReads project, I created a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

# Technologies and Languages Used:

- Backend-Server:
  - Provided by Udacity
- UI (Front-end):
  - ReactJS
    - React Hooks
    - Functional Components
  - Typescript
  - HTML
  - style with pure CSS
- Tools:
  - Create-react-app
  - Git version Control System
  - Github
  - Github Pages, Live <a href="https://ahmedalima.github.io/my-reads-a-book-tracking-app/">Here</a>

## Interactions

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

### Home page

![](./src/public/imgs/home.png)

### API response - valid URL

![](./src/public/imgs/valid-url-results.png)

### Invalid URL message

![](./src/public/imgs/invalid-url.png)

## Run project

Below shows how to run in development and production mode.

### Download Dependencies

`npm install` or `yarn`

### run in development mode

To start the webpack dev server at port 8080

` $ npm run build-dev` or `yarn build-dev`

Start back-end serve
`npm run start` or `yarn start`

### run in production mode

Generate the dist files and then start server at port 3000

` $ npm run build-prod` or `yarn build-prod`

` $ npm run start` or `yarn start`

## Configs files

- Webpack
  - Dev Configs: `webpack.config.dev.js`
    - Not optimized build
    - source map
  - Production `webpack.config.prod.js`
    - Optimized build
    - Auto generated HTML from template
- Dependency
  - `package.json`

## API

The project uses Semantic Text Analysis SDKs from [Meaning Cloud](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc), which provides a powerful and flexible AI-driven content analysis solutions.

## Offline Functionality

The project have service workers set up in webpack to provide the offline functionality of our app. When the service worker is functioning correctly, you will see the below message when you inspect the browser.

![](./src/public/imgs/offline-service-worker.png)

## Testing

Testing is done with Jest. To run test, use the command

`npm run test` or `yarn test`

![](./src/public/imgs/testing.png)

This project is live <a href="https://ahmedalima.github.io/my-reads-a-book-tracking-app/">
Here
</a>

https://ahmedalima.github.io/my-reads-a-book-tracking-app/

# To start the Application

### `npm install`

### `npm start`

# FEATURES:

- Categorize books into
  - Currently reading
  - Want to Read
  - Read
- Add new Books to the your library
- Remove books from your library

# Technologies Used:

- ReactJS
- React Router DOM
- React Hooks with functional component
