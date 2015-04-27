var myConsole = require("./my_console");
var arraysAreEqual = require("./arrays_are_equal");

myConsole.log("Tuna noodle");
myConsole.log("Louisa's play kitchen");
myConsole.log("Tuna Sandwich");

var logs = myConsole.searchLogs("Tuna");

if (arraysAreEqual(logs, ["Tuna noodle", "Tuna Sandwich"])) {
  console.log("pass");
} else {
  console.log("fail");
  console.log("expected", logs, "to equal", ["Tuna noodle", "Tuna Sandwich"]);
}
