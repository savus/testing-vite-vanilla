document.addEventListener("DOMContentLoaded", function () {
  const isVisible = "is-visible";
  const active = "active";
  const dataNavLink = "[data-navlink]";
  const navLinks = "nav-links";
  const closeButton = "close-button";
  const overlay = "modal-overlay";

  const navLinkElem = document.querySelector(`.${navLinks}`);

  const formClose = document.querySelectorAll(`.${closeButton}`);

  const setActive = (selector, elem) => {
    const activeSelected = document.querySelector(`${selector}.${active}`);
    if (activeSelected !== null) activeSelected.classList.remove(active);
    elem.classList.add(active);
  };

  const firstNameInput = document.querySelector("#first-name");
  let firstName = "";
  const setFirstName = (input) => (firstName = input);
  const updateFirstName = () =>
    document
      .querySelectorAll(".first-name-input")
      .forEach((input) => (input.innerText = firstName));

  const delegateNavLinks = (e) => {
    const { target } = e;
    const isLink = target.matches(dataNavLink);
    if (isLink) {
      const dataLink = target.dataset.navlink;

      setActive(dataNavLink, target);
      document.getElementById(dataLink).classList.add(isVisible);
    }
  };

  const closeModal = (e) => {
    const form = e.target.closest(`.${overlay}`);
    form.classList.remove(isVisible);
  };

  navLinkElem.addEventListener("click", delegateNavLinks);

  formClose.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  firstNameInput.addEventListener("keyup", (e) => {
    setFirstName(e.target.value);
    updateFirstName();
  });

  document.addEventListener("keyup", (e) => {
    const key = e.key;

    switch (key) {
      case "Enter":
        break;
    }
  });
});
