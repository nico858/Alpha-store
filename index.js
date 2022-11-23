const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.json());
routerApi(app);



app.get('/', (req, res) => {
  res.send('Aquí va a estar la mejor tienda de CR7');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('New endpoint');
})

app.listen(port, () => {
  console.log('Mi port' + port);
});
