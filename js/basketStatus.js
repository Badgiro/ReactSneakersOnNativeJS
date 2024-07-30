function basketStatusCheck() {
  const basketItems = document.querySelector(".basket-items__wrapper");
  const emptyBasket = document.querySelector(".basket-empty");
  const fillBasket = document.querySelector(".basket-calc__wrapper");
  if (basketItems.children.length > 0) {
    checkBasketFill();
    emptyBasket.classList.add("basket-calc__visibility");
    fillBasket.classList.remove("basket-calc__visibility");
  } else {
    checkBasketFill();
    emptyBasket.classList.remove("basket-calc__visibility");
    fillBasket.classList.add("basket-calc__visibility");

    document
      .querySelector(".basket-empty__button")
      .addEventListener("click", () => {
        const basketVisibility = document.querySelector(".basket-wrapper");
        basketVisibility.classList.remove("basket-open");
      });
  }
}
