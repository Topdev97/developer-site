import express from 'express';
import cors from 'cors';
import routerApi from './routes/index.js';

import { logErrors, errorHandler } from './middlewares/error.handler.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
