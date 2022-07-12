(() => {
  const refs = {
    openMenuBtn: document.querySelector(".page-header__open-btn"),
    closeMenuBtn: document.querySelector(".page-header__close-btn"),
    menu: document.querySelector(".menu-container"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-closed");
    refs.body.classList.toggle("no-scroll");
  }
})();
