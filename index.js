const express = require('express');
const routerApi = require('./routes/index');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get('/', (req, res) => {
  res.send('Aquí va a estar la mejor tienda de CR7');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('New endpoint');
})

app.listen(port, () => {
  console.log('Mi port' + port);
});
