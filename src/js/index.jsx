document.addEventListener("DOMContentLoaded", function () {
  const active = "active";
  const isVisible = "is-visible";
  const dataNavLink = "[data-navlink]";
  const nav = "nav-links";

  const navLinks = document.querySelector(`.${nav}`);

  const setActive = (selector, elem) => {
    const activeSelected = document.querySelector(`${selector}.${active}`);
    if (activeSelected !== null) activeSelected.classList.remove(active);
    elem.classList.add(active);
  };

  navLinks.addEventListener("click", function ({ target }) {
    const isLink = target.dataset.navlink !== null;
    if (isLink) {
      setActive(dataNavLink, target);
      document
        .getElementById(`${target.dataset.navlink}`)
        .classList.add("is-visible");
    }
  });
});
