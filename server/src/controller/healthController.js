/**
 * Created by IMFCORP\mohanpratap.singh on 27/3/17.
 */
'use strict';
const jsreport = require('jsreport-core')({
        templatingEngines: {
            allowedModules: '*'
        }
    }),
    healthService = require('../service/healthService');
let jsreportStarted = false;


const healthController = {
    /**
     * Generate the People data report
     */
    generateReport: function (req, res) {
        let init;
        if (jsreportStarted) {
            init = Promise.resolve(jsreport)
        } else {
            console.log('initializing jsreport...');
            jsreportStarted = true
            init = jsreport.init()
        }
        healthService.getPeopleData().then(function (data, err) {
            if (err) {
                init.then(function () {
                    return jsreport.render({
                        template: {
                            content: '<h1>People Data is not available</h1>',
                            engine: 'handlebars',
                            recipe: 'chrome-pdf'
                        }
                    }).then(function (resp) {
                        resp.stream.pipe(res);
                        //res.send({});
                    });
                }).catch(function (e) {
                    console.log(e)
                    res.end(e.message);
                });
            } else {
                let peoples = data.filter(function (obj) {
                    return (obj.films.length >= 4 && obj.starships.length > 0 && obj.mass && obj.height && obj.gender && obj.homeworld);
                });
                init.then(function () {
                    return jsreport.render({
                        template: {
                            content: `
                            <h2>Peoples</h2>
                            <style>
                                table {
                                    border-style:solid; 
                                    border-spacing: 8px; 
                                    width:70%; 
                                    text-align: left;
                                }                
                            </style>
                            <table style=''>
                              <tr>
                                <th>Name</th>
                                <th>Height</th>
                                <th>Weight</th>
                                <th>Gender</th>
                                <th>Home planet</th>
                              </tr>
                              {{#each peoples}}
                                <tr>
                                    <td style='padding: 10px;'>
                                        {{name}}
                                    </td>
                                    <td>
                                        {{height}}
                                    </td>
                                    <td>
                                        {{mass}}
                                    </td>
                                    <td>
                                        {{gender}}
                                    </td>
                                    <td>
                                        {{homeworld}}
                                    </td>
                                </tr>
                              {{/each}}    
                            </table>`,
                            engine: 'handlebars',
                            recipe: 'chrome-pdf'
                        },
                        data: { peoples: peoples }
                    }).then(function (resp) {
                        resp.stream.pipe(res);
                        //res.send({});
                    });
                }).catch(function (e) {
                    console.log(e)
                    res.end(e.message);
                });
            }
        });

    }
};
module.exports = healthController;