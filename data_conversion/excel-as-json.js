convertExcel = require('excel-as-json').processFile;

let options = {
    sheet: '2',
    isColOriented: false,
};

convertExcel('filing-codes-crime-codes.xlsx', 'crimecodes.json', options);
