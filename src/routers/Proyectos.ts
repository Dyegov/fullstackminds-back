const express = require('express');
const routerProyectos = express.Router();
const { Proyectos } = require('../models/proyecto/Proyectos');

// CREATE
routerProyectos.post('/', async (req: any, res: any) => {
  Proyectos.create(req.body)
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// READ
routerProyectos.get('/', async (req: any, res: any) => {
  Proyectos.find()
    .populate('lider')
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

routerProyectos.get('/:_id', async (req: any, res: any) => {
  Proyectos.findById(req.params._id)
    .populate('lider')
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// UPDATE
routerProyectos.put('/:_id', async (req: any, res: any) => {
  Proyectos.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// DELETE
routerProyectos.delete('/:_id', async (req: any, res: any) => {
  Proyectos.findByIdAndDelete(req.params._id)
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

export { routerProyectos };
