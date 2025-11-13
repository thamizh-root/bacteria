import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");
var isFloating = false;

window.addEventListener("scroll", () => {
  console.log("window.scrollY > 100", window.scrollY > 100, window.scrollY);
  if (window.scrollY > 100) {
    button.classList.add("show");

    if (!isFloating) {
      gsap.to(button, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.out",
      });
    }

    isFloating = true;
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("mouseenter", () => {
  console.log(".....");
  gsap.to(button, { scale: 1.1, duration: 0.2 });
});
button.addEventListener("mouseleave", () => {
  console.log("..8888...");
  gsap.to(button, { scale: 1, duration: 0.2 });
});
button.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
