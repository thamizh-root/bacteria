# Ultimate GSAP Workshop Starter

```
import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  duration: 5,
  // background: "#ff6f61",
  borderRadius: "50%",
  rotate: 360,
  onComplete: () => {
    gsap.to(".card", {
      opacity: 0,
      duration: 5,
      borderRadius: "50%",
      yoyo: true,
      rotate: 360,
    });
  },
});

```

why this makes no sense.. but below works 

```
import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  duration: 5,
  // background: "#ff6f61",
  borderRadius: "50%",
  rotate: 360,
  onComplete: () => {
    gsap.to(".box", {
      duration: 5,
      borderRadius: "0%",
    });
  },
});

```