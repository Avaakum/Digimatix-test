const valid  = () => {
  
  // Валидация данных ввода телефона в инпуты
  document.body.addEventListener("input", e => {
    let target = e.target;

    if (target.getAttribute("type") === "tel") {
      target.value = "+" + target.value.replace(/[^0-9]/g, "");
      if (target.value.length == 1) {
        target.value = "";
      }
    }
  });

};

module.exports = valid;