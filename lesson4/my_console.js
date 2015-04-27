var my_console = {
  messages : [],

  log : function (message) {
    this.messages.push(message);
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

module.exports = my_console;
