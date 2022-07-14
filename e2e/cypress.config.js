const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV_TEST === 'develop' ? '.env.dev' : '.env',
});

module.exports = defineConfig({
  env: {
    USER: process.env.USER_TEST_IGUA,
    PASSWORD: process.env.PASSWORD_TEST_IGUA,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: './reports/junit/test-results.[hash].xml',
  },
  e2e: {
    video: true,
    viewportWidth: 1600,
    viewportHeight: 900,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 5,
    excludeSpecPattern: '*.js',
    specPattern: ['**/*.{feature, features}'],

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
