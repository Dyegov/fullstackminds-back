import { gql } from 'apollo-server-express';
import { tiposInscripcion } from '../models/inscripcion/types';
import { tiposAvance } from '../models/avance/types';
import { tiposProyecto } from '../models/proyecto/types';

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [tiposGlobales, tiposInscripcion, tiposAvance, tiposProyecto];
