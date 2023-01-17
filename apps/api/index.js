import "dotenv/config";
import { app } from "./app.js";
import { dbConnect } from "./db/mongo/index.js";
import { config } from "./config.js";
const {PORT} = config
app.listen(PORT, () => {
  console.log(`[express]: Escuchando en el puerto ${PORT}`);
});
