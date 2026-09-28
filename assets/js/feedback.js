(() => {
  const form = document.querySelector("main > form");
  const toast = document.querySelector("#mensagem-cadastro");
  const dialog = document.querySelector("#confirmacao-cadastro");

  if (!form || !toast || !dialog) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    toast.hidden = false;
    toast.textContent = "Dados conferidos. Seu cadastro foi recebido com sucesso.";

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    }
  });
})();
