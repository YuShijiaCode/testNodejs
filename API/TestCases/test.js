// const expect = require("chai").expect;
// import {expect as expect} from "chai";
const API_Object = require("../../CommonStep/API/API_Object")

const addContext = require('mochawesome/addContext');
let request;
let response;
let timeStamp = new Date();

const ApiReq = new API_Object();

describe( ': Positive Test', () => {

    beforeEach(function () {
        response = null;
        addContext(this, {
            title: 'StartTime',
            value: {
                StartTime: timeStamp = new Date()
            }
        });
    });
    afterEach(function () {
        if (response) {
            addContext(this, {
                title: 'Request',
                value: {
                    Request: request
                }
            });
            addContext(this, {
                title: 'Response',
                value: {
                    Response: response
                }
            });
            addContext(this, {
                title: 'EndTime',
                value: {
                    EndTime: timeStamp = new Date()
                }
            });
        }
    });

    it('Case 01: get weather => Success', (done) => {
        try {
            setTimeout(() => {//Wait syncTimeAPI*1000 seconds


                ApiReq.getWeather("https://api.qweather.com/v7/weather/now?location=101010100&key=ee0f1773f17645a18f4880d59a51fd99",(res, url) => {

                    request = {
                        URL: url
                    };
                    response = res.body;
                    // Expect response headers：x-app,Content-Type
                    // expect(res.statusCode).to.equal(200);
                    // const resBody = JSON.parse(res.body);
                    // // token check
                    // expect(resBody.code).to.equal('403');
                    done();
                });
            }, 1000);
        } catch (e) {
            done(e);
        }
    });

});
