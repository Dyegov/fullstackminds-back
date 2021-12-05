import { resolversInscripcion } from '../models/inscripcion/resolvers';
import { resolversAvances } from '../models/avance/resolvers';
import { resolversProyecto } from '../models/proyecto/resolvers';
import { resolversUsuario} from '../models/usuario/resolvers';

export const resolvers = [
    resolversInscripcion,
    resolversAvances,
    resolversProyecto,
    resolversUsuario
];
