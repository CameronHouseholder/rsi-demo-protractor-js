/**
 * Page representing the RSI home page
 */
// Imports
let expectedConditionsUtil = require('../../rsi.utils/expected-conditions.util');

let HomePage = function() {
    this.page = {
        goTo: function(baseUrl) {
            browser.get(this.getPageUrl(baseUrl));
        },
        getPageUrl: function(baseUrl) {
            return baseUrl;
        },
    };
    
    this.careersButton = {
        getLocator: function() {
            return element(by.linkText('CAREERS'));
        },
        clickButton: function() {
            let elem = this.getLocator();
            expectedConditionsUtil.waitForVisibility(elem);
            elem.click();
        },
    };
};
module.exports = new HomePage();
