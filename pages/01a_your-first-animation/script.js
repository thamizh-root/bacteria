
// step 01
//
// gsap.to(".card", {
//     opacity: 1,
//     scale: 1,
//     duration: 0.6
// });

// step 02 
//
gsap.to(".card", {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    onComplete: () => {
        gsap.to('.card', {
            y: -80,
            repeat: -1,
            yoyo: true,
            duration: 0.5
        })
    }
});