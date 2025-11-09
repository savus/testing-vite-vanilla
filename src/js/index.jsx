document.addEventListener("DOMContentLoaded", function () {
  const isVisible = "is-visible";
  const active = "active";
  const dataNavLink = "[data-navlink]";
  const navLinks = "nav-links";
  const closeButton = "close-button";
  const overlay = "modal-overlay";

  const navLinkElem = document.querySelector(`.${navLinks}`);

  const formClose = document.querySelectorAll(`.${closeButton}`);

  navLinkElem.addEventListener("click", ({ target }) => {
    const isLink = target.matches(dataNavLink);
    if (isLink) {
      const dataLink = target.dataset.navlink;
      document.getElementById(dataLink).classList.add(isVisible);
    }
  });

  formClose.forEach((button) => {
    button.addEventListener("click", ({ target }) => {
      const form = target.closest(`.${overlay}`);
      form.classList.remove(isVisible);
    });
  });

  document.addEventListener("keyup", (e) => {
    const key = e.key;

    switch (key) {
      case "Enter":
        if (form.classList.contains("is-visible"))
          form.classList.remove("is-visible");
        else form.classList.add("is-visible");
        break;
    }
  });
});
