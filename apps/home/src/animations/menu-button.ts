import { mobileButton, navLinks } from "../nodes";
import { gsap } from "gsap";
import { menuAnimation } from "./menu";

export function menuButtonAnimation() {
  mobileButton.addEventListener("click", (event) => {
    mobileButton.classList.toggle("isOpen");

    if (mobileButton.classList.contains("isOpen")) {
      const line1 = mobileButton.querySelector(".line-1");
      const line2 = mobileButton.querySelector(".line-2");
      const line3 = mobileButton.querySelector(".line-3");
      gsap.to(line1, { rotate: 45, y: 10 });
      gsap.to(line2, { rotate: -45 });
      gsap.to(line3, { rotate: 45, y: -10 });
      menuAnimation.open();
    } else {
      const line1 = mobileButton.querySelector(".line-1");
      const line2 = mobileButton.querySelector(".line-2");
      const line3 = mobileButton.querySelector(".line-3");
      gsap.to(line1, { rotate: 0, y: -1 });
      gsap.to(line2, { rotate: 0 });
      gsap.to(line3, { rotate: 0, y: 1 });
      menuAnimation.close();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      mobileButton.classList.remove("isOpen");
      const line1 = mobileButton.querySelector(".line-1");
      const line2 = mobileButton.querySelector(".line-2");
      const line3 = mobileButton.querySelector(".line-3");
      gsap.to(line1, { rotate: 0, y: -1 });
      gsap.to(line2, { rotate: 0 });
      gsap.to(line3, { rotate: 0, y: 1 });
      menuAnimation.close();
    });
  });
}
