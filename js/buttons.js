const sneakersWrapper = document.getElementById("sneakers-holder");
const likedButton = document.querySelector(".heart-changer");
const inBasketButton = document.querySelector(".item-status__check");

sneakersWrapper.addEventListener("click", function (event) {
  if (event.target.classList.contains("heart-changer")) {
    if (event.target.classList.contains("item-heart__liked")) {
      event.target.classList.remove("item-heart__liked");
    } else {
      event.target.classList.add("item-heart__liked");
    }
  } else if (event.target.classList.contains("item-status__check")) {
    if (!event.target.classList.contains("item-status__checked")) {
      event.target.classList.add("item-status__checked");
      checkBasketFill();
    } else {
      event.target.classList.remove("item-status__checked");
      checkBasketFill();
    }
  }
  checkBasketFill();
});
