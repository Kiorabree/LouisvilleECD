var Profile = require("./profile.js");
var renderer = require("./renderer.js");

var commonHeaders = {"Content-Type": "text/html"}
function homeRoute(request, response) {
  if(request.url === "/") {
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response);
    renderer.view("login", {}, response);
    renderer.view("footer", {}, response);
    response.end();
}
}

function userRoute(request, response) {
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, commonHeaders);
    renderer.view ("header", {}, response);

    var dancerProfile = new Profile(username);

    dancerProfile.on("end", function(ECDprofile){
      var values = {  username: profileJSON.gravatar_url  }

      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });

    dancerProfile.on("error", function(error){
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("login", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });
  }
}





module.exports.home = homeRoute;
module.exports.user = userRoute;
