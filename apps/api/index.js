import "dotenv/config";
import { getAuth } from "firebase-admin/auth";
import { app } from "./app.js";

app.listen(3000, () => {
  console.log(`escuchando en el puerto 3000`);
});
getAuth()
  .getUserByEmail("davc93@gmail.com")
  .then((value) => {
    console.log(value);
  })
  .catch((error)=>{
    console.error(`[Error-auth]:${error}`)
  })
