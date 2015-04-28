module.exports = function (console) {
  var searchableConsole = {
    messages : [],

    log : function (message) {
      this.messages.push(message);
      console.log(message);
    },

    searchLogs: function (query) {
      var result = [];
      for (var i = 0; i < this.messages.length; i++) {
        if (this.messages[i].indexOf(query) >= 0) {
          result.push(this.messages[i]);
        }
      }
      return result;
    }
  };

  return searchableConsole;
}
