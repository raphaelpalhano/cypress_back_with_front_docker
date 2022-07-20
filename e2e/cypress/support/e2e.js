// This example support/index.js is processed and
// ***********************************************************
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import plugins
import 'cypress-failed-log';
import 'cypress-mochawesome-reporter/register';

// utils backend
import './backend/commands/utils/schema.validation';
import './backend/commands/utils/request.service';

// service-commom
import './backend/commands/services/common/rest.service';

// service-specific
import './backend/commands/services/research_users.service';

Cypress.Server.defaults({
  delay: 500,
  force404: false,
  whitelist: () => true,
});
