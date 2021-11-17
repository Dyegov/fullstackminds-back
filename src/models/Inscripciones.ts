import { Schema, model } from 'mongoose';
import { Enum_EstadoIncripcion } from "./Enums"
import { Proyectos } from "./Proyectos"
// import { Usuarios } from "./Usuarios"


interface Inscripcion {
    proyecto: Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
    estado: Enum_EstadoIncripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
}

const inscripcionesSchema = new Schema<Inscripcion>({
    proyecto: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: Proyectos
    },
    estudiante: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Usuarios'
    },
    estado: {
        type: String,
        enum: Enum_EstadoIncripcion,
        required: true
    },
    fechaIngreso: {
        type: Date,
        required: true
    },
    fechaEgreso: {
        type: Date,
        required: true
    }
})

const Inscripciones = model('Inscripciones', inscripcionesSchema, 'Inscripciones');

export { Inscripciones };
