// logger.utils.js

'use strict';
// Requires
let log4js = require('log4js');
// Logger
log4js.configure({
    appenders: {
        actions: {type: 'file', filename: 'testresults/oucms_protractor.log'},
        expects: {type: 'file', filename: 'testresults/oucms_protractor.log'},
        tests: {type: 'file', filename: 'testresults/oucms_protractor.log'},
        data: {type: 'file', filename: 'testresults/oucms_protractor.log'},
    },
    categories: {
        default: {appenders: ['tests'], level: 'info'},
        actions: {appenders: ['actions'], level: 'info'},
        expects: {appenders: ['expects'], level: 'info'},
        data: {appenders: ['data'], level: 'info'},
    },
});
// Exports logger
module.exports.log4js = log4js;
