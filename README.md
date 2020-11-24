# ReactNativeCICD

Simple POC to define a CI CD process on react-native app.

## main commands

- `npm install`

- `npm test`
- `npm test --watch`

- `npm start`
- `npm run ios`
- `npm run android`

- `npm run lint`
- `npm run lint:fix`

## this project includes

- auto fix on save
  - format code + fix warning and error
  - prettier + eslint
- unit test
  - see [names.test.js](./src/services/names.test.js)
  - can be used with watcher to test on every change
  - jest
- react render test
  - see [App.test.js](./src/App.test.js)
  - render React component and validate that it render with no error
- CI
  - build / test on every 'git push origin master'
  - with github action
  - see [ci.yml](.github/workflows/ci.yml)
