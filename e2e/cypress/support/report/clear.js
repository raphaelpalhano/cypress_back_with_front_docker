const rimraf = require('rimraf');

rimraf.sync('reports/json/*.json');
rimraf.sync('reports/html/*');
rimraf.sync('reports/screenshots/spec/*');
rimraf.sync('reports/junit/test-results.*.xml');
rimraf.sync('cypress/videos/spec/*.feature.mp4');
