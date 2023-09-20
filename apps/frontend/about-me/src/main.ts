import "../../../../packages/ui-html/common/global.css";
import "./style.css";

import { navigation } from "./navigation";
import { createHomePage } from "./routes/home";
window.addEventListener('DOMContentLoaded',()=>{
    console.log("DOMContentLoaded");
    
})
window.addEventListener("load",()=>{
    console.log("load");
    
})

createHomePage()
navigation()
