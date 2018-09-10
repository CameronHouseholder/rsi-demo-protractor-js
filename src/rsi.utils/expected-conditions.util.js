/**
 * Util class representing protractors expected conditions API of waiting till an element is either present or visible in the DOM
 */

let ExpectedConditionsUtils = function() {
    this.waitForPresence = function(elem) {
        browser.wait(protractor.ExpectedConditions.presenceOf(elem), 20000, elem.locator().toString() + ' or its option is not present in the DOM after 5 seconds!');
    };
    this.waitForVisibility = function(elem) {
        browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 20000, elem.locator().toString() + ' or its option is not visible in the DOM after 5 seconds!');
    };
};
module.exports = new ExpectedConditionsUtils();
