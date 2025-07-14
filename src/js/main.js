const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu");
console.log("menuBtn:", menuBtn);
console.log("menu:", menu);

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__open");
  console.log("Класс добавлен:", menu.className);
});
