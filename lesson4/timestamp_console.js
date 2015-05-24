

module.exports = function (console) {
  var timestampConsole = {
    log : function (message) {
      var date = new Date;
      console.log(
        date.getMonth() + 1 + "/" + date.getDate() +
        "/" +  date.getFullYear() + " " + message
      );
    }
  }
  return timestampConsole;
}
