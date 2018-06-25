'use strict';
let Q = require('q'),
    request = require('request'),
    config = require('../../config/dev');

let healthService = {
    getPeopleData: function () {
        var deferred = Q.defer();
        request({
            url: config.hostURL+'/people',
            method: 'GET',
            json: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/javascript, application/json"
            }
        },
        function(err, response, responseData) {
            if (response.statusCode != 200) {
                deferred.reject({
                    reason: "Could not get people data from third party API",
                    response: responseData,
                    statusCode: response.statusCode
                })
            } else {
                deferred.resolve(responseData.results)
            }
        });

    return deferred.promise;
    }
}
module.exports = healthService;