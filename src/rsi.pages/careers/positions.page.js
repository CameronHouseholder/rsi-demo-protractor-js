/**
 * Page representing the Positions page
 */
// Imports
let expectedConditionsUtil = require('../../rsi.utils/expected-conditions.util');

let PositionsPage = function () {
    this.taleoIframe = {
        getLocator: function () {
            return browser.driver.findElement(protractor.By.id('taleo-embed'));
        },
        switchToIframe: function () {
            let elem = this.getLocator();
            browser.switchTo().frame(elem);
        },
        switchToDefaultContent: function () {
            browser.switchTo().defaultContent();
        },
    };

    this.locationTextBox = {
        taleoIframe: this.taleoIframe,
        getLocator: function () {
            return element(by.id('location'));
        },
        clickLocationTextBox: function () {
            this.taleoIframe.switchToIframe();
            let elem = this.getLocator();
            expectedConditionsUtil.waitForVisibility(elem);
            browser.actions().mouseMove(elem).click().perform();
        },
    };

    this.searchButton = {
        getLocator: function () {
            return element(by.buttonText('Search'));
        },
        clickButton: function () {
            let elem = this.getLocator();
            expectedConditionsUtil.waitForVisibility(elem);
            elem.submit();
        },
    };

    this.locationCheckboxes = {
        getLocator: function (location) {
            let checkbox = element.all(by.className('oracletaleocwsv2-checkbox-wrapper')).filter(function (elem) {
                return elem.getText().then(function (text) {
                    return text.includes(location);
                });
            }).first();
            return checkbox;
        },
        clickCheckbox: function (location) {
            let elem = this.getLocator(location);
            expectedConditionsUtil.waitForVisibility(elem);
            browser.actions().mouseMove(elem).perform();
            elem.click();
        },
    };

    this.saveButton = {
        getLocator: function () {
            return element(by.linkText('Save'));
        },
        clickButton: function () {
            let elem = this.getLocator();
            expectedConditionsUtil.waitForVisibility(elem);
            elem.click();
        },
    };

    this.newSearchButton = {
        taleoIframe: this.taleoIframe,
        getLocator: function () {
            return element(by.linkText('New Search'));
        },
        clickButton: function () {
            let elem = this.getLocator();
            expectedConditionsUtil.waitForVisibility(elem);
            elem.click();
            this.taleoIframe.switchToDefaultContent();
        },
    };

    this.searchResultsRows = {
        getLocator: function () {
            return element.all(by.className('oracletaleocwsv2-accordion-head'));
        },
    };
};
module.exports = new PositionsPage();
