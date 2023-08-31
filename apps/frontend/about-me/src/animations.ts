import { animate ,inView} from "motion"

async function scrollAnimations() {
    inView(".section",({target})=>{
        console.log("elemento a entrado",target)
        animate(
            target.querySelector("* > *") as Element,
            { x: [-100,0] },
            { delay: 0.3, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
          );
    })
}

export {
    scrollAnimations
}