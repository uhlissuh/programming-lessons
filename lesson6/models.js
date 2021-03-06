var fs = require("fs");

module.exports = {
  getPeople: function() {
    return JSON.parse(fs.readFileSync("./data/people.json", "utf8"));
  },

  createPerson: function (newPerson) {
    var people = this.getPeople();
    people.push(newPerson);
    fs.writeFileSync(
      "./data/people.json",
      JSON.stringify(people)
    );
  },

  deletePerson: function(personIndex) {
    var data = this.getPeople();
    data.splice(personIndex, 1);
    fs.writeFileSync(
      "./data/people.json",
      JSON.stringify(data)
    );
  }
}
