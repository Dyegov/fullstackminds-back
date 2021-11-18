const express = require('express');
const routerAvances = express.Router();
const { Avances } = require('../models/Avances');

// CREATE
routerAvances.post('/', async (req: any, res: any) => {
  Avances.create(req.body)
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// READ
routerAvances.get('/', async (req: any, res: any) => {
  Avances.find()
    .populate('creadoPor')
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

routerAvances.get('/:id', async (req: any, res: any) => {
  Avances.findById(req.params.id)
    .populate('creadoPor')
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// UPDATE
routerAvances.put('/:id', async (req: any, res: any) => {
  Avances.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// DELETE
routerAvances.delete('/:id', async (req: any, res: any) => {
  Avances.findByIdAndRemove(req.params.id)
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

export { routerAvances };
