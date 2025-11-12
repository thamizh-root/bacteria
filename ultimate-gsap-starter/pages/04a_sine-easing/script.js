import gsap from "gsap";

const btn = document.querySelector(".scroll-to-top");

// btn.classList.add("show");
// gsap.to(btn, {
//     y: -10,
//   duration: 1.5,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.out",
// });

let isFloating = true;
window.addEventListener("scroll", () => {
  console.log("window.scrollY > 500", window.scrollY > 500);
  if (window.scrollY > 500) {
    btn.classList.add("show");
    console.log("!isFloating", !isFloating);

    if (isFloating) {
      gsap.to(btn, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.out",
      });
    }

    isFloating = true;
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("mouseenter", ()=>{
    gsap.to(btn, {scale: 1.1, duration: 0.5});
});

btn.addEventListener("mouseleave", ()=>{
    gsap.to(btn, {scale: 1, duration: 0.5});
});

btn.addEventListener("click", ()=>{
    window.scrollTo(0,0);
});
