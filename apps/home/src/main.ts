import { navigation,renderPage } from "./navigation";
import { links, linksExternals,navBar} from "./nodes";


window.addEventListener('DOMContentLoaded',renderPage)
const menuClose = navBar.querySelector("input") as HTMLInputElement;

links.forEach((link) => {
  link.addEventListener('click',(event) => {
    event.preventDefault()
    const target:any = event.target
    navigation(target.href);
  });
});
linksExternals.forEach((link) => {
  link.addEventListener('click',(event) => {
    event.preventDefault();
    menuClose.checked = false
    const target:any = event.target
    setTimeout(() => {
      window.location.href = target.href
    }, 700);
    
  });
});