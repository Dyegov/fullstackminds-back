import { resolversInscripciones } from '../models/inscripcion/resolvers';
import { resolversAvances } from '../models/avance/resolvers';
import { resolversProyecto } from '../models//proyecto/resolvers';

export const resolvers = [resolversInscripciones, resolversAvances, resolversProyecto];
