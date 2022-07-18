const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV_TEST === 'develop' ? '.env.dev' : '.env',
});

module.exports = defineConfig({
  env: {
    USER_CPF: process.env.USER_TEST_CPF,
    PASSWORD_TEST1: process.env.PASSWORD_TEST_IGUA1,
    USER_CNPJ: process.env.USER_TEST_CNPJ,
    PASSWORD_TEST2: process.env.PASSWORD_TEST_IGUA2,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    reportDir: 'cypress/reports',
    reportPageTitle: 'Igua report',
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
