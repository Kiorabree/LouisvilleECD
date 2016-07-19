var fs = require('fs');

function view(templateName, values, response){
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', function (error, fileContents){


    response.write(fileContents);
  });
}

 module.exports.view = view;
