const express = require('express');
const routerUsuarios = express.Router();
const { Usuarios } = require('../models/Usuarios');

// CREATE
routerUsuarios.post('/', async (req: any, res: any) => {
  Usuarios.create(req.body)
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// READ
routerUsuarios.get('/', async (req: any, res: any) => {
  Usuarios.find()
    .populate('estado')
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

routerUsuarios.get('/:_id', async (req: any, res: any) => {
  Usuarios.findById(req.params._id)
    .populate('estado')
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// UPDATE
routerUsuarios.put('/:_id', async (req: any, res: any) => {
  Usuarios.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

// DELETE
routerUsuarios.delete('/:_id', async (req: any, res: any) => {
  Usuarios.findByIdAndDelete(req.params._id)
    .then((response: any) => res.json(response))
    .catch((e: any) => res.send(e));
});

export { routerUsuarios };
