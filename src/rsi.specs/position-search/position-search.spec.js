/**
 * Spec representing the smoke tests for navigating the pages of oucms
 */

// Page imports
let homePage = require('../../rsi.pages/home/home.page');
let careersPage = require('../../rsi.pages/careers/careers.page');
let positionsPage = require('../../rsi.pages/careers/positions.page');
// Util imports
let expectedConditionsUtil = require('../../rsi.utils/expected-conditions.util');
let using = require('jasmine-data-provider');

describe('Position Search (By Location)', function () {

    beforeAll(function () {
        isAngularSite(false);
        // Home page
        homePage.page.goTo(browser.baseUrl);
        homePage.careersButton.clickButton();
        // Careers page
        careersPage.openPositionsButton.clickButton();
    });

    using([{ location: 'Oklahoma City, OK' }, { location: 'Mobile, AL' }], function (data) {
        it('search for open position by location', function () {
            // Positions page
            positionsPage.locationTextBox.clickLocationTextBox();
            positionsPage.locationCheckboxes.clickCheckbox(data.location);
            positionsPage.saveButton.clickButton();
            positionsPage.searchButton.clickButton();

            positionsPage.searchResultsRows.getLocator().count().then(function (count) {
                let elem;
                for (let i = 0; i < count; i++) {
                    elem = positionsPage.searchResultsRows.getLocator().get(i);
                    expect(elem.getText()).toContain(data.location);
                }
                positionsPage.newSearchButton.clickButton();
            });
        });
    });

});
