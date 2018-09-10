/**
 * Page representing the Careers page
 */
// Imports
let expectedConditionsUtil = require('../../rsi.utils/expected-conditions.util');

let CareersPage = function() {
    this.openPositionsButton = {
        getLocator: function() {
            return element(by.linkText('OPEN POSITIONS'));
        },
        clickButton: function() {
            let elem = this.getLocator();
            expectedConditionsUtil.waitForVisibility(elem);
            elem.click();
        },
    };
};
module.exports = new CareersPage();
