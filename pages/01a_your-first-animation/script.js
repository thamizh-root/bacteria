// gsap.to(".card", {
//   opacity: 1,
//   scale: 1,
//   duration: 5,
//   onComplete: () => {
//     gsap.to(".card", {
//       y: -20,
//       repeat: -1,
//       yoyo: true,
//       duration: 0.5,
//     });
//   },
// });

import gsap from "gsap";

gsap.to(".card", {
  opacity: 1,
  duration: 8,
  rotation: 360,
  yoyo: true,
  repeat: -1,
  scale: 1.2
});
