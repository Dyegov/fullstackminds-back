import { Proyectos } from './Proyectos';

const resolversProyecto = {
  Query: {
    Proyectos: async (parent: any, args: any) => {
      const proyectos = await Proyectos.find().populate('avances').populate('inscripciones');
      return proyectos;
    },
  },
  Mutation: {
    crearProyecto: async (parent: any, args: any) => {
      const proyectoCreado = await Proyectos.create(args);
      return proyectoCreado;
    },
  },
};

export { resolversProyecto };
