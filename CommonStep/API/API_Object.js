var HttpRequest = require("./API_Common_Step");


function API_Object() {

}

var proto = API_Object.prototype;

proto.getWeather = function (url, cb){
    HttpRequest.get(url, "", "", (err, res) => {
        cb(err ? err : res, url)
    })
}

module.exports = API_Object;