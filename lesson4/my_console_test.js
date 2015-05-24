var makeSearchableConsole = require("./searchable_console");
var arraysAreEqual = require("./arrays_are_equal");

fakeConsole = {
  wasCalled : false,
  log: function () {
    this.wasCalled = true;
  }
}

searchableConsole = makeSearchableConsole(fakeConsole);

searchableConsole.log("Tuna noodle");
searchableConsole.log("Louisa's play kitchen");
searchableConsole.log("Tuna Sandwich");

if (fakeConsole.wasCalled === true) {
  console.log("pass");
} else {
  console.log("FAIL, expected console.log to be called");
}

var logs = searchableConsole.searchLogs("Tuna");

if (arraysAreEqual(logs, ["Tuna noodle", "Tuna Sandwich"])) {
  console.log("pass");
} else {
  console.log("fail");
  console.log("expected", logs, "to equal", ["Tuna noodle", "Tuna Sandwich"]);
}
