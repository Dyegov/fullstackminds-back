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
app.post('/proyectos', async (req: any, res: any) => {
  Proyectos.create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.send(e));
});

// READ
app.get('/proyectos', async (req: any, res: any) => {
  Proyectos.find()
    .then((response) => res.json(response))
    .catch((e) => console.log(e));
});

app.get('/proyectos/:_id', async (req: any, res: any) => {
  Proyectos.findById(req.params._id)
    .then((response) => res.json(response))
    .catch((e) => console.log(e));
});

// UPDATE
app.put('/proyectos/:_id', async (req: any, res: any) => {
  Proyectos.findByIdAndUpdate(req.params._id, req.body, { new: true })
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
app.post('/avance', async (req: any, res: any) => {
  const AvanceAgregar = new Avances({
    proyecto: req.body.proyecto,
    fecha: req.body.fecha,
    descripcion: req.body.descripcion,
    observaciones: req.body.observaciones,
    // creadoPor: req.body.creadoPor;
  });

  AvanceAgregar.save().then((AvanceResult) => {
    res.send({ data: 'Creado satisfactoriamente' });
  });
});

// READ
app.get('/avance', async (req: any, res: any) => {
  Avances.find().then((AvanceResult) => {
    res.send({ data: AvanceResult });
  });
});

// UPDATE
app.put('/avance/:id', async (req: any, res: any) => {
  const id = req.params.id;
  const AvanceModificar = new Avances({
    _id: id,
    proyecto: req.body.proyecto,
    fecha: req.body.fecha,
    descripcion: req.body.descripcion,
    observaciones: req.body.observaciones,
  });

  Avances.findByIdAndUpdate(id, AvanceModificar).then((AvanceResult) => {
    res.send({ data: 'Actualizado satisfactoriamente' });
  });
});

// DELETE
app.delete('/avance/:id', async (req: any, res: any) => {
  Avances.findByIdAndRemove(req.params.id).then((AvanceResult) => {
    res.send({ data: 'Eliminado satisfactoriamente' });
  });
});

// Server
app.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});
