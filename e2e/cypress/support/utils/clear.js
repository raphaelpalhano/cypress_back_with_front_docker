const rimraf = require('rimraf');

rimraf.sync('cypress/reports/assets/*');
rimraf.sync('cypress/reports/index.html');
rimraf.sync('cypress/videos/spec/*.feature.mp4');
