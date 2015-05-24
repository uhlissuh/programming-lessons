var render = require("./views");
var http = require("http");
var fs = require("fs");
var models = require("./models");


var server = http.createServer(function(req, res) {
  console.log("got request", req.url, req.method);
  if (req.url === "/create") {
    res.writeHead(302, {Location : "/"});
    req.on("data", function(data) {
      models.createPerson(parseFormData(data.toString()));
      res.end();
    })

  } else if (req.url === "/main.css") {
    res.end(fs.readFileSync("./main.css", "utf8"));

  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var babiesString = "";
    var people = models.getPeople();
    for (var i = 0; i < people.length; i++) {
      babiesString += render("list-item.html", {
        name: people[i].name,
        age: people[i].age
      })
    }

    res.end(render("./index.html", {
      babyCount: people.length,
      babyList: babiesString
    }))
  }
});

function parseFormData(formData) {
  var person = {};
  var array = formData.split("&");
  for (var i = 0; i < array.length; i++) {
    var keyValuePair = array[i].split("=");
    person[keyValuePair[0]] = keyValuePair[1];
  }
  return person;
}

server.listen(8080, "localhost");
