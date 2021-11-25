const express = require('express');
const routerInscripciones = express.Router();
const { Inscripciones } = require('../models/inscripcion/Inscripcion');

// Create
routerInscripciones.post('/', async (req: any, res: any) => {
  const inscripcion = req.body;
  inscripcion.fechaIngreso = new Date();
  inscripcion.fechaEgreso = new Date(inscripcion.fechaEgreso);

  Inscripciones.create(inscripcion)
    .then((response: any) => res.json(response))
    .catch((err: any) => res.send(err));
});

// Get all
routerInscripciones.get('/', async (req: any, res: any) => {
  Inscripciones.find() //.populate('Usuarios')
    .then((response: any) => {
      res.json(response);
    })
    .catch((err: any) => {
      res.json({ error: err });
    });
});

// Get by id
routerInscripciones.get('/:id', async (req: any, res: any) => {
  Inscripciones.findOne({ _id: req.params.id })
    .populate('proyecto')
    .populate('estudiante')
    .then((response: any) => {
      res.json(response);
    })
    .catch((err: any) => {
      res.json({ error: err });
    });
});

// Update by id
routerInscripciones.put('/:id', async (req: any, res: any) => {
  Inscripciones.findByIdAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
    .then((response: any) => {
      res.json(response);
    })
    .catch((err: any) => {
      res.json({ error: err });
    });
});

// Delete by id
routerInscripciones.delete('/:id', async (req: any, res: any) => {
  Inscripciones.findByIdAndDelete({ _id: req.params.id })
    .then((response: any) => {
      res.json(response);
    })
    .catch((err: any) => {
      res.json({ error: err });
    });
});

export { routerInscripciones };
