const express = require('express');
const routerInscripciones = express.Router();
const { Inscripciones } = require('../models/inscripcion/Inscripcion');

// Create
routerInscripciones.post('/', async (req: any, res: any) => {
  Inscripciones.create(req.body)
    .then((response: any) => res.json(response))
    .catch((err: any) => res.send(err));
});

// Get all
routerInscripciones.get('/', async (req: any, res: any) => {
  Inscripciones.find()
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
  if (req.body.estado === "ACEPTADA") { req.body.fechaIngreso = Date.now(); }
  Inscripciones.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
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
