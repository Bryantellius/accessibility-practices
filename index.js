const topLevelLinks = document.querySelectorAll(".link");

topLevelLinks.forEach((link) => {
  if (link.nextElementSibling) {
    link.addEventListener("focus", function () {
      this.parentElement.classList.add("focus");
    });

    const subMenu = link.nextElementSibling;
    const subMenuLinks = subMenu.querySelectorAll("a");
    const lastLinkIndex = subMenuLinks.length - 1;
    const lastLink = subMenuLinks[lastLinkIndex];

    lastLink.addEventListener("blur", function () {
      link.parentElement.classList.remove("focus");
    });
  }
});
