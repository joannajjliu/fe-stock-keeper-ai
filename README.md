# React 2021 setup

## Initial setup

- Setup is done using React, TS, and webpack, following instructions from [January 20, 2021 tutorial by Carl Rippon](https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/)

## Installation

- Make sure `yarn` is installed globally: `npm install -g yarn`
- Run `yarn install` in terminal to install dependencies

### Debugging

- If there arises any issues with `node_modules` try:
  1. delete node_modules: `rm -rf node_modules yarn.lock`
  2. clean cache: `yarn cache clean`
  3. re-install dependencies: `yarn install`

## Linting, prettier, and pre-commit hooks

- Rules have been implemented per [Apr 2020 article by Manish Sharma](https://medium.com/@loclghst/set-up-eslint-prettier-and-pre-commit-hooks-using-husky-for-react-73e7a51cda26)

## Starting dev environment

- Make sure `yarn` is installed globally: `npm install -g yarn`
- Navigate to the root of this repo, and run `yarn start`
- Navigate to [localhost:4000](localhost:4000) in your browser to view the application
  > Hot reloading is enabled
- Make sure to `ctrl + C` out of the terminal when done development, otherwise the application may continue to run in the background (blocking your port) after closing your code editor

## Bundling files for production

- Once satisified with development, run `yarn build` to bundle the files in `./src` folder into the `./build` folder

## Process automation (in-progress)

- Automation of processes will be done using a _makefile_ using [make.js](https://www.npmjs.com/package/make)
  > [_makefile_ introduction and rules](https://www.gnu.org/software/make/manual/make.html#Rule-Introduction)
- Be sure to install make.js globally `npm install -g make`
