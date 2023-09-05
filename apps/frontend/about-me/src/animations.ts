import { animate ,inView,scroll} from "motion"


async function inViewAnimations() {
    animate(".typography--title-medium",{opacity:0},{
        duration:0
    })
    
    inView(".section",({target})=>{
        animate(
            target.querySelector(".typography--title-medium") as Element,
            { opacity: 1,transform:"none" },
            { delay: 0.3 , duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
          );
      

    
    },{margin:"-150px"})
    scroll(animate(
        ".bg-image-1",
        {
            opacity:[1,0]
        }
        
    ),{
        offset:[
            "start start","center center"
        ]
    })
    scroll(animate(
        ".bg-image-2",
        {
            opacity:[1,0]
        }
        
    ),{
        offset:[
            "end center","center end"
        ]
    })
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