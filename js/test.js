const page = document.querySelectorAll(".container");
const profileButton = document.querySelector(".closer");
const likedPage = document.querySelector(".liked");
const like = document.querySelector(".header-liked");
const markers = document.querySelector(".markers");

like.addEventListener("click", () => {
  if (likedPage.classList.contains("invisible")) {
    likedPage.classList.remove("invisible");
    page.forEach((block) => {
      block.classList.add("invisible");
    });
  } else {
    likedPage.classList.add("invisible");
    page.forEach((block) => {
      block.classList.remove("invisible");
    });
  }
});

sneakersHolder.addEventListener("click", (event) => {
  const likeClicked = document.querySelector(".heart-changer");
  const alreadyLiked = document.querySelector(".item-heart__liked");
  if (event.target.classList.contains(alreadyLiked)) {
    const likedCard = event.target.closest(".sneakers-item").innerHTML;
    markers.insertAdjacentHTML("beforeend", likedCard);
  }
});
