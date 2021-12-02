import { Schema, model } from 'mongoose';
import { Enum_Rol, Enum_EstadoUsuario } from './Enums';

interface Usuarios {
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
}

const usuariosSchema = new Schema<Usuarios>({
  correo:{
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email: string) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: 'Escribe un correo valido.',
    },
  },
  identificacion:{
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: Enum_Rol,
  },
  estado: {
    type: String,
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.pendiente,
  },
});

const Usuarios = model('Usuarios', usuariosSchema, 'Usuarios');

export { Usuarios };