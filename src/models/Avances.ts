import { Schema, model } from 'mongoose';
import { Proyectos } from './proyecto/Proyectos';
import { Usuarios } from './Usuarios';

interface Avances {
  proyecto: Schema.Types.ObjectId;
  fecha: Date;
  descripcion: string;
  observaciones: [string];
  creadoPor: Schema.Types.ObjectId;
}

const avancesSchema = new Schema<Avances>({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: Proyectos,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: Usuarios,
    required: true,
  },
});

const Avances = model('Avances', avancesSchema, 'Avances');

export { Avances };
