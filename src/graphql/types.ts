import { gql } from "apollo-server-express";
import { tiposUsuario } from "../models/usuario/types"
import { tiposInscripcion } from "../models/inscripcion/types"
import { tiposAvance } from '../models/avance/types';
import { tiposProyecto } from '../models/proyecto/types';
import { tiposEnums } from "../models/enums/types"

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposUsuario,
  tiposInscripcion,
  tiposAvance,
  tiposProyecto,
  tiposEnums
];
