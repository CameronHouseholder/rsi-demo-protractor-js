/**
 * Util class representing config file values
 */
let ConfUtils = function() {
    let jarPaths = {
        localSeleniumServerJar: '../../../../AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.14.0.jar',
    };
    this.jarPath = {
        getJarPath: function() {
            return jarPaths.localSeleniumServerJar;
        },
    };
};
module.exports = new ConfUtils();
