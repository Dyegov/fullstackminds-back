import { Avances } from './avance';

const resolversAvances = {
  Query: {
    Avances: async (parents: any, args: any) => {
      const avances = await Avances.find().populate('proyecto').populate('creadoPor');
      return avances;
    },
    filtrarAvance: async (parents: any, args: any) => {
      const avanceFiltrado = await Avances.find({ proyecto: args._id })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents: any, args: any) => {
      const avanceCreado = Avances.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceCreado;
    },
  },
};

export { resolversAvances };