import { gsap } from "gsap";

export const aboutMeAnimation = () => {
    gsap.to("header", {
        scrollTrigger: {
        trigger:'header',
          markers: true,
          start:'top top',
            end:'bottom center',
            toggleActions:'pause'
        },
        opacity:0,
        duration:10,
        x:200
      });
};
