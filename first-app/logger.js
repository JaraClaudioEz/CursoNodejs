
const url = 'http://mylogger.io/log'

function log(message){
    //Send an HTTP request
    console.log(message);
}

module.exports.log = log; //We can define another name to the exported object ex. module.exports.mylog = log;
//Also the line above exports an OBJECT, to export only a function: module.exports = log;