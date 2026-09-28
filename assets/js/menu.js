(() => {
  const button = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-principal");

  if (!button || !menu) return;

  document.documentElement.classList.add("js");

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      button.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 701px)").matches) closeMenu();
  });
})();
