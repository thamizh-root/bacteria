import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  duration: 5,
  borderRadius: "50%",
  rotate: 360,
  // onComplete: () => {
  //   gsap.to(".box", {
  //     duration: 5,
  //     borderRadius: "10%",
  //   });
  // },
});
