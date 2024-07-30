function checkBasketFill() {
  const newPrice = document.querySelectorAll(".basket-counter");
  const products = document.querySelectorAll(".sneakers-item");
  const newTax = document.querySelector(".calc-tax__amount");

  let amount = 0;
  let tax = 0;

  products.forEach((item) => {
    const InBasket = item.querySelector(".item-status__checked");
    if (InBasket) {
      const price = item.querySelector(".item-price__count");
      const forAmount = price.innerText;

      amount += parseInt(forAmount);
    }
  });
  tax = parseInt(amount * 0.05);

  newTax.innerText = `${tax} руб`;

  newPrice.forEach((elem) => {
    elem.innerText = `${amount} руб`;
  });
}
