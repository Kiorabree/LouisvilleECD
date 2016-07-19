var Profile = require("./profile.js");

function homeRoute(request, response) {
  if(request.url === "/") {
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("Header\n");
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
        avatarUrl: ...,
        username: ...,
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
