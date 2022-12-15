const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

routerApi(app);

app.use(express.json());

const whitelist = ['http://localhost:8080', 'file:///D:/Proyects/frontend.html', 'file:///D:/Proyects/frontend.html'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(cors(options));

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
