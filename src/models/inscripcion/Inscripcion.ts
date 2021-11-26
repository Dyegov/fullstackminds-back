import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from '../enums/Enums';
import { Proyectos } from '../proyecto/Proyectos';
import { Usuarios } from '../Usuarios';

interface Inscripcion {
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
  estado: Enum_EstadoInscripcion;
  fechaIngreso: Date;
  fechaEgreso: Date;
}

const inscripcionesSchema = new Schema<Inscripcion>({
  proyecto: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Proyectos,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Usuarios,
  },
  estado: {
    type: String,
    enum: Enum_EstadoInscripcion,
    default: Enum_EstadoInscripcion.PENDIENTE,
  },
  fechaIngreso: {
    type: Date,
    required: true,
  },
  fechaEgreso: {
    type: Date,
    required: true,
  },
});

const Inscripciones = model('Inscripciones', inscripcionesSchema, 'Inscripciones');

export { Inscripciones };
