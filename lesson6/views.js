var fs = require("fs");

function render (file, replacements) {
  var content = fs.readFileSync(file, "utf8");
  var keys = Object.keys(replacements);
  for (var i = 0; i < keys.length; i++) {
    content = content.replace("{{" + keys[i]+ "}}", replacements[keys[i]])
  }
  return content;
}

module.exports = render;
