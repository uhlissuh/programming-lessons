TimestampConsole = require("./timestamp_console");


fakeConsole = {
  wasCalled : false,

  log : function () {
    this.wasCalled = true;
  }
}

timestampConsole = TimestampConsole(fakeConsole);

timestampConsole.log("polenta for dinner");

if (fakeConsole.wasCalled === true) {
  console.log("pass");
} else {
  console.log("fail");
}
