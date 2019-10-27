const protractorUtils = require('@bazel/protractor/protractor-utils');
const protractor = require('protractor');
const path = require('path');

module.exports = function(config) {
  // In this example, `@bazel/protractor/protractor-utils` is used to run
  // the server. protractorUtils.runServer() runs the server on a randomly
  // selected port (given a port flag to pass to the server as an argument).
  // The port used is returned in serverSpec and the protractor serverUrl
  // is the configured.
  const isProdserver = false;
  return protractorUtils
    .runServer(config.workspace, config.server, isProdserver ? '-p' : '-port', [])
    .then(serverSpec => {
      // Example app is hosted under `/example` in the prodserver and under `/` in devserver
      const serverUrl = `http://localhost:${serverSpec.port}`;
      protractor.browser.baseUrl = serverUrl;
    });
};
