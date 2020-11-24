# ReactNativeCICD

Simple POC to define a CI CD process on react-native app.

## main commands

- `npm install`

- `npm test`
- `npm run test:watch`
- `npm run test:update`
- `npm run test:coverage`

- `npm start`
- `npm run ios`
- `npm run android`

- `npm run lint`
- `npm run lint:fix`

## this project includes

- auto fix on save
  - format code + fix warning and error
  - auto sort and group import
  - prettier + eslint
- unit test
  - see [names.test.js](src/services/__tests__/names.test.js)
  - can be used with watcher to test on every change
  - jest
- react render test
  - see [App.test.js](src/__tests__/App.test.js)
  - render React component and validate that it render with no error
- snapshot test
  - see [Button.test.js](src/components/__tests__/Button.test.js)
  - see [Button.test.js.snap](src/components/__tests__/__snapshots__/Button.test.js.snap)
  - create a serializable value of a react tree and check that its stay the same
- CI
  - build / test on every 'git push origin master'
  - with github action
  - see [ci.yml](.github/workflows/ci.yml)
