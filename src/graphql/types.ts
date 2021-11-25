import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/types"
import { tiposInscripcion } from "../models/inscripcion/types"
import { tiposAvance } from '../models/avance/types';
import { tiposProyecto } from '../models/proyecto/types';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposEnums,
  tiposInscripcion,
  tiposAvance,
  tiposProyecto
];
