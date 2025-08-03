document.querySelectorAll(".like").forEach(function(likeDiv) {
  likeDiv.addEventListener("click", function() {
    const heartIcon = this.querySelector("i");
    heartIcon.classList.toggle("red-heart");
  });
});
