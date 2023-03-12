const { app } = require("./app.js");
const { config } = require("./config.js");

const {port} = config
app.listen(port, () => {
  console.log(`[express]: Escuchando en el puerto ${port}`);
});
