document.addEventListener("DOMContentLoaded", function () {
  const active = "active";
  const navLink = "[data-navlink]";
  const navbarLinks = document.querySelectorAll(`${navLink}`);

  const formClass = "input-form";
  const inputForm = document.querySelector(`.${formClass}`);

  const setActive = (selector, elem) => {
    const selected = document.querySelector(`${selector}.${active}`);
    if (selected !== null) selected.classList.remove(active);
    elem.classList.add(active);
  };

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function ({ target }) {
      setActive(`${navLink}.active`, target);
      const linkElement = document.querySelector(`#${target.dataset.navlink}`);
      if (linkElement.classList.contains("is-visible"))
        linkElement.classList.remove("is-visible");
      else linkElement.classList.add("is-visible");
    });
  });
});
