import { Schema, model } from 'mongoose';
import { Enum_TipoObjetivo } from '../enums/Enums';
import { Proyectos } from '../proyecto/Proyectos';

interface Objetivos {
  descripcion: string;
  tipo: Enum_TipoObjetivo;
  proyecto: Schema.Types.ObjectId;
}

const objetivosSchema = new Schema<Objetivos>({
  descripcion: {
    type: String,
    required: true,
    unique: true,
  },
  tipo: {
    type: String,
    enum: Enum_TipoObjetivo,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Proyectos,
  },
});

const Objetivos = model('Objetivos', objetivosSchema, 'Objetivos');

export { Objetivos };
