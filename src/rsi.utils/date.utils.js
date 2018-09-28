/**
 * Util class representing date manipulation
 */
// Imports
let moment = require('moment');

let DateUtils = function() {
    let datePickerFormat = 'M/D/YYYY';
    let panelDateFormat = 'll';
    let filedDateFormat = 'MM/DD/YYYY';
    this.formats = {
        getDatePickerFormat: function() {
            return datePickerFormat;
        },
        getPanelDateFormat: function() {
            return panelDateFormat;
        },
        getFiledDateFormat: function() {
            return filedDateFormat;
        },
    };
    this.dates = {
        getCurrentDate: function(format) {
            return moment().format(format);
        },
        getCurrentYear: function() {
            return moment().format('YYYY');
        },
        getTwoDaysAgoDate: function(format) {
            return moment().subtract(2, 'days').format(format);
        },
        getTomorrowsDate: function(format) {
            return moment().subtract(-1, 'days').format(format);
        },
        getYesterdaysDate: function(format) {
            return moment().subtract(1, 'days').format(format);
        },
    };
};
module.exports = new DateUtils();
