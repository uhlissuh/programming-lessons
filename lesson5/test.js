


var infoBox = document.querySelector(".info-box");


function setupListener(lSelector, pSelector) {
  var pContent = document.querySelector(pSelector).textContent
  var link = document.querySelector(lSelector);
  link.addEventListener("mouseover", function() {
    infoBox.textContent = pContent;
  });
  link.addEventListener("mouseleave", function() {
    infoBox.textContent = "";
  });
}

setupListener(".tuna", ".tuna-text");
setupListener(".milk", ".milk-text");
setupListener(".carrots", ".carrots-text");
