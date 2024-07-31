const page = document.querySelectorAll(".container");
const profileButton = document.querySelector(".closer");
const likedPage = document.querySelector(".liked");
const like = document.querySelectorAll(".header-liked");
const markers = document.querySelector(".markers");
const closeMarkersWindow = document.querySelectorAll(".closer");
const checkMarkersFill = document.querySelector(".empty-markers");

like.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (likedPage.classList.contains("invisible")) {
      likedPage.classList.remove("invisible");

      page.forEach((block) => {
        block.classList.add("invisible");
      });
    } else {
      likedPage.classList.add("invisible");
      checkMarkersFill();
      page.forEach((block) => {
        block.classList.remove("invisible");
      });
    }
  });
});

closeMarkersWindow.forEach((elem) => {
  elem.addEventListener("click", () => {
    likedPage.classList.add("invisible");
    page.forEach((block) => {
      block.classList.remove("invisible");
    });
  });
});
function checkMarkersLength() {
  if (markers.children.length > 0) {
    checkMarkersFill.classList.add("invisible");
  } else {
    checkMarkersFill.classList.remove("invisible");
  }
}

sneakersWrapper.addEventListener("click", function (event) {
  if (event.target.classList.contains("heart-changer")) {
    const card = event.target.closest(".sneakers-item");
    const cardId = card.getAttribute("data-id");

    const existingCard = markers.querySelector(`[data-id="${cardId}"]`);

    if (existingCard) {
      existingCard.remove();
      event.target.classList.remove("item-heart__liked");
    } else {
      const cardClone = card.cloneNode(true);
      markers.appendChild(cardClone);
      event.target.classList.add("item-heart__liked");
      checkMarkersLength();

      cardClone
        .querySelector(".heart-changer")
        .addEventListener("click", function () {
          cardClone.remove();
          card
            .querySelector(".heart-changer")
            .classList.remove("item-heart__liked");
          checkMarkersLength();
        });
    }
  }
});
markers.addEventListener("click", (event) => {
  if (event.target.classList.contains("item-status__check")) {
  }
});
