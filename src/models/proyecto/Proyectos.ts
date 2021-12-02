import { Schema, model } from 'mongoose';
import { Enum_EstadoProyecto, Enum_TipoObjetivo, Enum_FaseProyecto } from '../enums/Enums';
import { Usuarios } from '../usuario/Usuarios';

interface Proyectos {
  nombre: string;
  objetivos: [{ descripcion: string; tipo: Enum_TipoObjetivo }];
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
}

const proyectosSchema = new Schema<Proyectos>({
  nombre: {
    type: String,
    required: true,
  },
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
      },
    },
  ],
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.inactivo,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.nula,
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Usuarios,
  },
});

const Proyectos = model('Proyectos', proyectosSchema, 'Proyectos');

export { Proyectos };
