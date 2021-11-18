const express = require('express');
const routerObjetivos = express.Router();
const { Objetivos } = require('../models/Objetivos');

// CREATE
routerObjetivos.post('/', async (req: any, res: any) => {
  Objetivos.create(req.body)
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// READ
routerObjetivos.get('/', async (req: any, res: any) => {
  Objetivos.find()
    .populate('proyecto')
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

routerObjetivos.get('/:_id', async (req: any, res: any) => {
  Objetivos.findById(req.params._id)
    .populate('proyecto')
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// UPDATE
routerObjetivos.put('/:_id', async (req: any, res: any) => {
  Objetivos.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// DELETE
routerObjetivos.delete('/:_id', async (req: any, res: any) => {
  Objetivos.findByIdAndDelete(req.params._id)
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

export { routerObjetivos };
