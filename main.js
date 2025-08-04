document.querySelectorAll(".like").forEach(function(likeDiv) {
  likeDiv.addEventListener("click", function() {
    const heartIcon = this.querySelector("i");
    heartIcon.classList.toggle("red-heart");
  });
});




window.showNavList = function () {
  const sidebar = document.getElementById("sideBar");
  if (sidebar) sidebar.classList.toggle("active");
};

window.hideBar = function () {
  const sidebar = document.getElementById("sideBar");
  if (sidebar) sidebar.classList.remove("active");
};
