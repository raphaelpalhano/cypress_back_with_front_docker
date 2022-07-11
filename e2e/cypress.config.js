const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
   USER: "coca123",
   PASSWORD: "COca1234."
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
