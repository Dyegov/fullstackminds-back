import { gql } from "apollo-server-express";
import { tiposInscripcion } from "../models/inscripcion/types"

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [
  tiposGlobales,
  tiposInscripcion
];

