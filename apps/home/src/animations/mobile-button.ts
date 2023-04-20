import { mobileButton } from "../nodes";
import { gsap } from "gsap";

export function mobileButtonAnimation() {
  mobileButton.addEventListener("click", (event) => {
    mobileButton.classList.toggle("isOpen");
    if (mobileButton.classList.contains("isOpen")) {
      const line1 = mobileButton.querySelector(".line-1");
      const line2 = mobileButton.querySelector(".line-2");
      const line3 = mobileButton.querySelector(".line-3");
      gsap.to(line1, {
        rotate: 0,
        y: -1,
      });
      gsap.to(line2, {
        rotate: 0,
      });
      gsap.to(line3, {
        rotate: 0,
        y: 1,
      });
    } else {
      const line1 = mobileButton.querySelector(".line-1");
      const line2 = mobileButton.querySelector(".line-2");
      const line3 = mobileButton.querySelector(".line-3");
      gsap.to(line1, {
        rotate: 45,

        y: 10,
      });
      gsap.to(line2, {
        rotate: -45,
      });
      gsap.to(line3, {
        rotate: 45,
        y: -10,
      });
    }
  });
}
