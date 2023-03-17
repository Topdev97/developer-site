import { navigation,renderPage } from "./navigation";
import { links, linksExternals} from "./nodes";

window.addEventListener('DOMContentLoaded',renderPage)

links.forEach((link) => {
  link.addEventListener('click',(event) => {
    
    const target:any = event.target
    navigation(target.href);
  });
});
linksExternals.forEach((link) => {
  link.addEventListener('click',(event) => {
    event.preventDefault();
    const target:any = event.target
    setTimeout(() => {
      window.location.pathname = target.href
    }, 1500);
    
  });
});