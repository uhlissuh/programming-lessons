console.log("I loaded");

var deleteLinks = document.querySelectorAll(".delete-link");

for (var i = 0; i < deleteLinks.length; i++) {
  setupHandler(i);
}

function setupHandler(j) {
  deleteLinks[j].addEventListener("click", function(event) {
    var didConfirm = confirm(
      "Do you want to delete " +
      deleteLinks[j].parentElement.querySelector(".name").textContent
    );
    if (didConfirm) {
      $.ajax({
        url: '/people/' + j,
        type: 'DELETE',
        success: function(result) {
            location.reload();
        }
      });
    }
  });
}
