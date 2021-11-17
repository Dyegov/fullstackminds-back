// Imports
const express = require('express');
const cors = require('cors');

// App
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// BD
require('./db.ts');

// Models
import { Proyectos } from './models/Proyectos';

// import endpoints
// Inscripciones
const routerInscripciones = require("./endpoints/Inscripciones");

// use endpoints
app.use("/inscripciones", routerInscripciones);

// Routes
app.get('/', (req: any, res: any) => {
  res.send('test');
});

// Vista y Controlador Creación Proyectos
// CREATE
app.post('/proyecto', async (req: any, res: any) => {
  Proyectos.create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

// READ

// UPDATE

// DELETE

// Server
app.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});
