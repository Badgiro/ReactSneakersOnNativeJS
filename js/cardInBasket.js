const openBasket = document.querySelector(".header-basket__holder");
const basketWrapper = document.querySelector(".basket-wrapper");
const basket = document.querySelector(".basket");
const itemsWrapper = document.querySelector(".basket-items__wrapper");
const cardsWrapper = document.querySelector(".sneakers-all");

openBasket.addEventListener("click", () => {
  if (basketWrapper.classList.contains("basket-open")) {
    basketWrapper.classList.remove("basket-open");
    document.body.style.overflow = "";
  } else {
    basketWrapper.classList.add("basket-open");
    document.body.style.overflow = "hidden";
    window.onclick = function (event) {
      if (event.target === basketWrapper) {
        basketWrapper.classList.remove("basket-open");
        document.body.style.overflow = "";
      }
    };
  }

  basketStatusCheck();
});

window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-card")) {
    const whichCard = event.target.closest(".sneakers-item");

    const cardInfo = {
      id: whichCard.dataset.id,
      imgSrc: whichCard
        .querySelector(".sneakers-item__img")
        .getAttribute("src"),
      product: whichCard.querySelector(".sneakers-item__desc").innerText,
      price: whichCard.querySelector(".item-price__count").innerText,
    };
    const itemInCart = itemsWrapper.querySelector(`[data-id="${cardInfo.id}"]`);
    if (itemInCart) {
      itemInCart.remove();
    } else {
      const basketCardHTML = ` <div data-id="${cardInfo.id}" class="basket-item">
        <div class="basket-item__image">
          <img
            class="basket-item__img"
            src="${cardInfo.imgSrc}"
            alt=""
          />
        </div>
        <div class="basket-item__info">
          <div class="basket-item__desc">
            ${cardInfo.product}
          </div>
          <div class="basket-info__price">
            <span id="basket-item__price">${cardInfo.price}
          </div>
        </div>
        <button class="basket-item__delete"></button>
      </div>`;

      itemsWrapper.insertAdjacentHTML("beforeend", basketCardHTML);
    }
  }
  basketStatusCheck();
  checkBasketFill();
});

basket.addEventListener("click", function (event) {
  if (event.target.classList.contains("basket-item__delete")) {
    const basketItem = event.target.closest(".basket-item").dataset.id;
    const forDelete = cardsWrapper.querySelector(`[data-id="${basketItem}"]`);
    event.target.closest(".basket-item").remove();

    forDelete.classList.remove("sneakers-item__shadow");

    forDelete
      .querySelector(".item-status__check")
      .classList.remove("item-status__checked");
  }
});
