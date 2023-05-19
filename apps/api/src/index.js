const { createApp } = require("./app.js");
const { config } = require("./config.js");

const { port } = config;

const main = async () => {
  const app = await createApp();
  app.listen(port, () => {
    console.log(`[express]: Escuchando en el puerto ${port}`);
  });
};

main()
