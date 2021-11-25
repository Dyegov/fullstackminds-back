import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/types"
import { tiposInscripcion } from "../models/inscripcion/types"
import { tiposAvance } from '../models/avance/types';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposEnums,
  tiposInscripcion,
  tiposAvance
];

