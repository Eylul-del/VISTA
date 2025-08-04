document.querySelectorAll(".like").forEach(function(likeDiv) {
  likeDiv.addEventListener("click", function() {
    let heartIcon = this.querySelector("i");
    heartIcon.classList.toggle("red-heart");
  });
});



window.showNavList = function () {
  let sidebar = document.getElementById("sideBar");
  if (sidebar) sidebar.classList.toggle("active");
};

window.hideBar = function () {
  let sidebar = document.getElementById("sideBar");
  if (sidebar) sidebar.classList.remove("active");
};