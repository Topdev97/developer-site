import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function sectionParallax(section) {
    // give height to the section before execute the animations
    ScrollTrigger.create({
        trigger:section,
        start:"top top",
        pin:true,
        markers:true
    
    })
}
export const AnimationExample = () => {
    
};
