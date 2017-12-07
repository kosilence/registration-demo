# Registration Demo

This registration demo is for learning how to write a React application.

The demo is created by [Create React App](https://github.com/facebookincubator/create-react-app), and developed with [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Jest](https://facebook.github.io/jest/) and [enzyme](https://github.com/airbnb/enzyme).

## Initial Product

1. `git clone`  Clone the repo to local.
2. `cd ./registration-demo`  Enter product's root directory.
3. `yarn install`  We use [yarn](https://yarnpkg.com) to manage our packages, if command not be found, install yarn first.
4. `npm start`  Run the application in the development mode.

## Registration Functions

1. User Name ← Must not be null.
2. Password ← Masked (not shown), must be at least 8 characters, contain upper and lower case letters.
3. Confirm Password ← Same as above, must match above.
4. Phone Number ← Check to ensure the number is valid for a Chinese mobile or fixed line phone number.
5. Submit Button ← Does not actually have to submit, but cannot be clicked unless all conditions are satisfied. Onclick, it puts all information into a JSON dict and displays it at bottom of page.

## Floder Structure

```
my-app/
 README.md
 node_modules/
 package-lock.json
 package.json
 yarn.lock
   public/
     index.html
     favicon.ico
   src/
   actions/
   components/
   containers/
   reducers/
     index.css
     index.js
     setupTests.js
```

- `actions/` This folder includes the definitions of store's actions and actionCreators.
- `components/` This folder includes four *Presentational Components* , they are `App`/ `FormInput` / `FormBody` / `FromInfo`.
- `containers/` folder is for *Container Component* ，it's used for dispatching action to corresponding *Presentational Component*.
- `reducers/` includes most of logic for the application, such as *handle event* & *form validator*.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run cover`

Show the test coverage in the console.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

### Other Avilable Scripts

Click [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts) to read more.