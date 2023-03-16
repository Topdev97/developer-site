import { navigation } from "./navigation";
import { links} from "./nodes";

links.forEach((link) => {
  link.addEventListener('click',(event) => {
    event.preventDefault();
    const target:any = event.target
    navigation(target.href);
  });
});
