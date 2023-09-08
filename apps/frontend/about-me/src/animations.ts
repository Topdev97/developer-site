import { animate ,inView,scroll} from "motion"


async function inViewAnimations() {
    
    
    inView(".section",({target})=>{
        animate(
            target.querySelectorAll(".typography--title-medium"),
            { opacity: 1,transform:"none" },
            { delay: 0.3 , duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
          );
      

    
    },{margin:"-150px"})
    
    scroll(
        animate(".progress-bar", { scaleX: [0, 1] }),
        {
            offset:[
                "start start","end end"
            ]
        }
      );
}
async function scrollAnimation() {
    
}

export {
    inViewAnimations,
    scrollAnimation
}