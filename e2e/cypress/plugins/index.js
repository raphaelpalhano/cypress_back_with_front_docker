/// <reference types="cypress" />
const fs = require('fs-extra');
const path = require('path');
// For Cucumber Integration
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', 'cypress', 'config', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
  on('file:preprocessor', createBundler({ plugins: [nodePolyfills(), createEsbuildPlugin(config)] }));
  // on('before:browser:launch', async (browser = {}, launchOptions) => {
  //   if (browser.family === 'chromium' && browser.name !== 'electron') {
  //     launchOptions.args.push('--disable-dev-shm-usage');
  //   }
  //   return launchOptions;
  // });

  const file = config.env.configFile || 'develop';

  return getConfigurationByFile(file);
};
