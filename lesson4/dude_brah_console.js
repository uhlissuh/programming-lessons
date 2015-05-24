module.exports = function (console) {
  return {
    isDudeMode : true,
    log : function (message) {
      if (this.isDudeMode === true) {
        console.log(message + ", dude");
      } else {
        console.log(message + ", brah");
      }
      this.isDudeMode = !this.isDudeMode;
    }
  }
}
