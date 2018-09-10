// navigation.smoke.conf.js

// Reporters
/*
let HtmlReporter = require('protractor-beautiful-reporter');
let TfsReporter = require('jasmine-tfs-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
*/
// Utils
let confUtils = require('../rsi.utils/conf.util');

exports.config = {
    // Test framework
    framework: 'jasmine',
    // Selenium server address
    seleniumServerJar: confUtils.jarPath.getJarPath(),
    localSeleniumStandaloneOpts: {
        port: 4444,
        jvmArgs: [
            '-Dwebdriver.chrome.driver=C:\\Users\\tfsbuild120\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\webdriver-manager\\selenium\\chromedriver_2.38.exe',
        ],
    },
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 120000,
        // print: function() {},
    },
    allScriptsTimeout: 120000,
    // Test suites
    suites: {
        positionSearch: '../rsi.specs/position-search/position-search.spec.js',
    },
    // Browsers capabilities and browser parameters
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
           // args: ['--headless', '--disable-gpu', '--window-size=1600,1000'],
           args: ['--window-size=1600,1000'],
        },
    },
    baseUrl: '',
    // Controls the number of sessions. -1 will run tests in parallel, 1 will run tests in sequence
    maxSessions: 1,
    // HTML Report
    onPrepare: function() {
        // Flag set bases on if the site uses angular or not
        global.isAngularSite = function(flag) {
            browser.ignoreSynchronization = !flag;
        };
        /*
        // Add a unit test reporter
        jasmine.getEnv().addReporter(new TfsReporter());
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'testresults/report/navigation-smoke/',
            preserveDirectory: false,
        }).getJasmine2Reporter());
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
              displayStacktrace: true,
            },
          }));
          */
    },
};
