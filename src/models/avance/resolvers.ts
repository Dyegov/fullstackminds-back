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

    agregarObservacion: async (parents: any, args: any) => {
      const avanceAgregadoObservacion = Avances.findByIdAndUpdate(
        { _id: args._id },
        { $push: { observaciones: args.observaciones } },
        { new: true }
      );
      return avanceAgregadoObservacion;
    },

    actualizarAvance: async (parents: any, args: any) => {
      const avanceActualizado = Avances.findByIdAndUpdate(
        { _id: args._id },
        {
          fecha: args.fecha,
          descripcion: args.descripcion,
          proyecto: args.proyecto,
          creadoPor: args.creadoPor,
        },
        { new: true }
      );
      return avanceActualizado;
    },

    eliminarAvance: async (parents: any, args: any) => {
      const avanceEliminado = Avances.findByIdAndDelete({
        _id: args._id,
      });
      return avanceEliminado;
    },
  },
};

export { resolversAvances };