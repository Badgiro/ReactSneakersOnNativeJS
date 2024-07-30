window.onload = () => {
  let input = document.querySelector("#sneakers-input");

  input.oninput = function () {
    let inputValue = this.value.trim().toLowerCase();
    let items = document.querySelectorAll(".sneakers-item__desc");

    if (inputValue !== "") {
      items.forEach((element) => {
        let text = element.innerText.toLowerCase();
        if (text.search(inputValue) == -1) {
          element.closest(".sneakers-item").classList.add("hide");
        }
      });
    } else {
      items.forEach((element) => {
        element.closest(".sneakers-item").classList.remove("hide");
      });
    }
  };
};
