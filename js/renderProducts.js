const sneakersHolder = document.getElementById("sneakers-holder");

getProducts();
checkBasketFill();

async function getProducts() {
  //парсим данные из JSON формата в JS
  const response = await fetch("./js/products.json");

  //Запускаем ф-ю рендера (отображения товаров)
  const productsArray = await response.json();

  renderProducts(productsArray);
}

function renderProducts(productsArray) {
  productsArray.forEach((item) => {
    const productHTML = `<div class="sneakers-item" data-id="${item.id}">
            <button class="item-heart heart-changer" ></button>

            <div class="sneakers-image">
              <img class="sneakers-item__img" src="./img/${item.imgSrc}" alt="#" />
            </div>
            <div class="sneakers-item__desc">
            ${item.product}
            </div>
            <div class="sneakers-item__botom">
              <div class="item-price">
                <div class="item-price__desc">ЦЕНА:</div>
                <div class="item-price__count">${item.price} <span>руб</span></div>
              </div>
              <div class="item-status">
                <button data-card type="button" class="item-status__check"></button>
              </div>
            </div>
          </div>`;

    sneakersHolder.insertAdjacentHTML("beforeend", productHTML);
  });
  const elem = document.querySelectorAll(".item-status__check");

  elem.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".sneakers-item");

      if (card.classList.contains("sneakers-item__shadow")) {
        card.classList.remove("sneakers-item__shadow");
      } else {
        card.classList.add("sneakers-item__shadow");
      }
    });
  });
}
