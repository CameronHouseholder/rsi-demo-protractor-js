// actions.utils.js

// Requires
let hotkeys = require('protractor-hotkeys');
let loggerUtils = require('../oucms.utils/logger.utils');
// Logger
let logger = loggerUtils.log4js.getLogger('actions');
/*
Page
*/
function backButtonPressed() {
    browser.navigate().back();
    console.log('Pressing back button');
    logger.info('Pressing back button');
};
function forwardButtonPressed() {
    browser.navigate().forward();
    console.log('Pressing forward button');
    logger.info('Pressing forward button');
};
function getBrowser(url) {
    browser.get(url);
    console.log('Going to ' + url);
    logger.info('Going to ' + url);
};
function refreshBrowser() {
    browser.refresh();
    console.log('Refreshing browser');
    logger.info('Refreshing browser');
}
// Exports page actions
module.exports.backButtonPressed = backButtonPressed;
module.exports.forwardButtonPressed = forwardButtonPressed;
module.exports.getBrowser = getBrowser;
module.exports.refreshBrowser = refreshBrowser;
/*
Mouse and keyboard
*/
// Values
let until = protractor.ExpectedConditions;
// Helpers
function waitForPresence(elem, elemName) {
    browser.wait(until.presenceOf(elem), 5000, elemName + ' or its option is not present in the DOM after 5 seconds!');
};
function waitForVisibility(elem) {
    browser.wait(until.visibilityOf(elem), 5000, elem.toString() + ' or its option is not visible in the DOM after 5 seconds!');
};
// Exports helpers
module.exports.waitForPresence = waitForPresence;
module.exports.waitForVisibility = waitForVisibility;
// Actions
function clickElement(elem, elemName) {
    waitForVisibility(elem, elemName);
    elem.getText().then(function(text) {
        console.log('Clicking (' + elemName + ') ' + text);
        logger.info('Clicking (' + elemName + ') ' + text);
        elem.click();
    });
};
function clickHotkey(hotkey) {
    let elem = $('body');
    waitForVisibility(elem, 'body');
    hotkeys.trigger(hotkey);
    console.log('Pressing hotkey ' + hotkey);
    logger.info('Pressing hotkey ' + hotkey);
};
function clickHotkeyToElement(elem, elemName, hotkey) {
    waitForVisibility(elem, elemName);
    hotkeys.trigger(hotkey, {targetElement: elem});
    console.log('Pressing hotkey (' + elemName + ') ' + hotkey);
    logger.info('Pressing hotkey (' + elemName + ') ' + hotkey);
};
function enterText(elem, elemName, text) {
    waitForVisibility(elem, elemName);
    elem.sendKeys(text);
    console.log('Entering text ' + text + ' into ' + elemName);
    logger.info('Entering text ' + text + ' into ' + elemName);
};
function clearText(elem, elemName) {
    waitForVisibility(elem, elemName);
    elem.clear();
    console.log('Clearing text in ' + elemName);
    logger.info('Clearing text in ' + elemName);
};
// Exports mouse and keyboard actions
module.exports.clickElement = clickElement;
module.exports.clickHotkey = clickHotkey;
module.exports.clickHotkeyToElement = clickHotkeyToElement;
module.exports.enterText = enterText;
module.exports.clearText = clearText;
