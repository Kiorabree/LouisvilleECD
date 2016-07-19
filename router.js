var Profile = require("./profile.js");
var renderer = require("./renderer.js");

function homeRoute(request, response) {
  if(request.url === "/") {
    response.writeHead(200, {"Content-Type" : "text/plain"});
    renderer.view("header", {}, response);
    response.write("Search\n");
    response.end("Footer\n");
}
}

function userRoute(request, response) {
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Header\n");

    var dancerProfile = new Profile(username);

    dancerProfile.on("end", function(ECDprofile){
      var values = {
        username: profileJSON.gravatar_url
      }

      response.write(values.username + "\n");
      response.end("Footer\n");

    });

    dancerProfile.on("error", function(error){
      response.end("Footer\n");
    });
  }
}





module.exports.home = homeRoute;
module.exports.user = userRoute;
