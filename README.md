# Plant store project - react

## Overview

This project is an app built with "Create React App". Project contains five main sections:

- Home,
- About,
- Products,
- Contact,
- Cart

To Home Component is added Grid list layout which allows to display a collection of images in an organized grid.
To About Component is added React Carousel from React Slick. This allows to display all photos from localdata.
Products Component is a heart of this project. Basically this component is dedicated to display all products. Additionaly it allows user to search product by: price, category, name of the product and possbility to have a free delivery. In addition to that, by clicking in every photo, user can get to the single page of this specific product. User have a possibility to add a products to cart by clicking on "add to cart" button.
Cart component is available from every place in aplication. User can estimate quantity of products in cart components. There is a possibility to buy product with the paypal button as a sandbox accounts.
The last component is a contact form which is created in Formik. Form includes three types of validation and allows user to send emails to website owner by emailjs library.
All project contains alert from materialUi which inform user about: adding product to cart, removing product from cart, making paymants and after sending emails in contact form.

### Link to deplyed app (netlify):

https://plant-store-react.netlify.app

## Used technologies:

- React,
- React Context,
- React-router-dom,
- Contentful CMS,
- Formik, Yup, EmailJs,
- PayPal Sandbox,
- Material UI,
- RWD,
- React-scroll

## Installing:

First of all clone the repository.

Check if you have node and npm installed by command:

#### node -v

#### npm -v

Then check if you have node_modules in your project, if not then install them by command:

#### npm install

After installation run:

#### npm start

Browser will automatically open on localhost:3000

All of the photos were taken from:
https://lolaflora.pl

If you have any problems to run the project, feel free to contact me by e-mail:

### lukaszlatalaaa@gmail.com

<!--
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
