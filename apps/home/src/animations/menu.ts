import { menu } from "../nodes";
import { gsap } from "gsap";

function MenuAnimation() {
  return {
    open: ()=> gsap.to(menu, { x: "0", duration: 0.5 }),
    close:()=> gsap.to(menu, { x: "100%", duration: 0.5 }),
  };
}

export const menuAnimation = MenuAnimation()