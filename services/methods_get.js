var chai = require('chai');
var expect = chai.expect;

var request = require('request');

var urlApi = "https://jsonplaceholder.typicode.com/";

module.exports = {
    return_get(urlRota, statusCodeGet, done) {
        request.get({
            url: `${urlApi}/${urlRota}`
        }, 
        function (error, response, body) {
            expect(response.statusCode).to.equal(statusCodeGet);
            done();
        });
    }
}