import "dotenv/config";
import { getAuth } from "firebase-admin/auth";
import { authenticate } from "./middlewares/auth.handler.js";
import { app } from "./app.js";
import { dbConnect } from "./db/mongo/index.js";
import { config } from "./config.js";
const {PORT} = config
app.listen(PORT, () => {
  console.log(`[express]: Escuchando en el puerto ${PORT}`);
});
// getAuth()
//   .getUserByEmail("davc93@gmail.com")
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error)=>{
//     console.error(`[Error-auth]:${error}`)
//   })
