var fetchUrl = require("fetch").fetchUrl;

const minutes = 10;
const target = "http://mhall.xyz";


console.log("Started");

setInterval(function(){
fetchUrl(target, function(error, meta, body){
    console.log(body.toString());
});
}, minutes * 60 * 1000);

setInterval(function(){
    console.log("server-keepalive running")
}, 5000);