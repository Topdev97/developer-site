import { gsap } from "gsap"
import { diegoCard } from "../nodes"

export const diegoCardAnimation = () => {
    gsap.from(diegoCard,{
        duration:1,
        x:-300

    })    

}