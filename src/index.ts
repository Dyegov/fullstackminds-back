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
import { Avances } from './models/Avances';
import { Usuarios } from './models/Usuarios';

// import endpoints
// Inscripciones
const routerInscripciones = require('./endpoints/Inscripciones');

// use endpoints
app.use('/inscripciones', routerInscripciones);

// Routes
app.get('/', (req: any, res: any) => {
  res.send('test');
});

// Vista y Controlador Creación Proyectos
// CREATE
app.post('/proyectos', async (req: any, res: any) => {
  Proyectos.create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

// READ
app.get('/proyectos', async (req: any, res: any) => {
  Proyectos.find()
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

app.get('/proyectos/:_id', async (req: any, res: any) => {
  Proyectos.findById(req.params._id)
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

// UPDATE
app.put('/proyectos/:_id', async (req: any, res: any) => {
  Proyectos.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
    .then((response) => res.json(response))
    .catch((e) => console.log(e));
});

// DELETE
app.delete('/proyectos/:_id', async (req: any, res: any) => {
  Proyectos.findByIdAndDelete(req.params._id)
    .then((response) => res.json(response))
    .catch((e) => console.log(e));
});

/* --------------------------------------- */

// Vista y Controlador Creación Avances
// CREATE
app.post('/avances', async (req: any, res: any) => {
  Avances.create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

// READ
app.get('/avances', async (req: any, res: any) => {
  Avances.find()
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

app.get('/avances/:id', async (req: any, res: any) => {
  Avances.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

// UPDATE
app.put('/avances/:id', async (req: any, res: any) => {
  Avances.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

// DELETE
app.delete('/avances/:id', async (req: any, res: any) => {
  Avances.findByIdAndRemove(req.params.id)
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

/* --------------------------------------- */

// inicio CRUD Usuarios {

// CREATE
app.post('/usuarios', async (req: any, res: any) => {
  Usuarios.create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

// READ
app.get('/usuarios', async (req: any, res: any) => {
  Usuarios.find()
    .then((response) => res.json(response))
    .catch((e) => console.log(e));
});

app.get('/usuarios/:_id', async (req: any, res: any) => {
  Usuarios.findById(req.params._id)
    .then((response) => res.json(response))
    .catch((e) => console.log(e));
});

// UPDATE
app.put('/usuarios/:_id', async (req: any, res: any) => {
  Usuarios.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
    .then((response) => res.json(response))
    .catch((e) => console.log(e));
});

// DELETE
app.delete('/usuarios/:_id', async (req: any, res: any) => {
  Usuarios.findByIdAndDelete(req.params._id)
    .then((response) => res.json(response))
    .catch((e) => console.log(e));
});

// } fin CRUD Usuarios

/* --------------------------------------- */

// Server
app.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});
