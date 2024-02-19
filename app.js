document.querySelectorAll(".nav__items").forEach((l) => {
  l.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    const targetElement = document.querySelector(targetId);

    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function (e) {
    console.log(e);
    document.querySelector(".nav__links ul").classList.toggle("visible");
  });
