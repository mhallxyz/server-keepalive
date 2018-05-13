var fetchUrl = require("fetch").fetchUrl;

console.log("Started");

const minutes = 10;

setInterval(function(){
fetchUrl("http://mhall.xyz", function(error, meta, body){
    console.log(body.toString());
});
}, minutes * 60 * 1000);