const express = require("express");
const router = express.Router();
const { Inscripciones } = require('../models/Inscripciones')

// Create
router.post("/",
    async (req: any, res: any) => {
        const inscripcion = req.body;
        inscripcion.fechaIngreso = new Date();
        inscripcion.fechaEgreso = new Date(inscripcion.fechaEgreso);

        Inscripciones.create(inscripcion)
            .then((response: any) => res.json(response))
            .catch((err: any) => res.send(err));
    }
);

// Get all
router.get("/",
    async (req: any, res: any) => {
        Inscripciones.find()//.populate('Usuarios')
            .then((response: any) => { res.json(response) })
            .catch((err: any) => { res.json({ error: err }); });
    }
);

// Get by id
router.get("/:id",
    async (req: any, res: any) => {
        Inscripciones.findOne({ _id: req.params.id }).populate('proyecto')
            .then((response: any) => { res.json(response) })
            .catch((err: any) => { res.json({ error: err }); });
    }
);

// Update by id
router.put("/:id",
    async (req: any, res: any) => {
        Inscripciones.findByIdAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
            .then((response: any) => { res.json(response) })
            .catch((err: any) => { res.json({ error: err }); });
    }
);

// Delete by id
router.delete("/:id",
    async (req: any, res: any) => {
        Inscripciones.findByIdAndDelete({ _id: req.params.id })
            .then((response: any) => { res.json(response); })
            .catch((err: any) => { res.json({ error: err }); });
    }
);

module.exports = router;