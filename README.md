# ReactNativeCICD

Simple POC to define a CI CD process on react-native app.

## main commands

- `npm install`

- `npm start`

- `npm run run-ios`
- `npm run run-android`
- `npm run run-android:kids`

- `npm run build-android`
- `npm run build-android:kids`
- `npm run build-android:release`
- `npm run build-android:kids:release`

- `npm run lint`
- `npm run lint:fix`

- `npm test`
- `npm run test:watch`
- `npm run test:update`
- `npm run test:coverage`

- `npm run e2e:build:ios`
- `npm run e2e:build:android`
- `npm run e2e:test:ios`
- `npm run e2e:test:android`

## this project includes

- auto fix on save
  - format code + fix warning and error
  - auto sort and group import
  - prettier + eslint
- build
  - android
    - apk generated in android/app/build/outputs/apk/{adults|kids}
  - ios
    - _todo_
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
- e2e test
  - detox
  - see [App.e2e.js](e2e/App.e2e.js)
- CI
  - with github action
  - [ci.yml](.github/workflows/ci.yml)
    - JS build-lint-test on every 'git push origin master'
  - [build-android.yml](.github/workflows/build-android.yml)
    - generate 2 apk and store them
  - [e2e-android.yml](.github/workflows/e2e-android.yml)
    - _not finished_
- 2 app configs
  - 'Party' for adult and 'Party kids'
  - 'Party' is the default app config
  - android
    - use flavor
    - diff : app name, app id, app icon
  - ios
    - use schema
    - diff : _not done yet_
  - js
    - use .env and .env.kids
    - use Config.ENV

## misc

- use `it.skip` and `it.only` in your test files

## backlog

- [ ] e2e:ios script *xcodebuild did not work* 
- [ ] build-ios script *xcodebuild did not work* 
- [ ] publish-android (fastlane) *json google play setup did not work*
- [ ] build-ios github workflow
- [ ] publish-android
- [ ] publish-ios
