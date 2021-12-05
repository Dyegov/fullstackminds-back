import { Objetivos } from './Objetivos';

const resolversObjetivo = {
    Query: {
        Objetivos: async (parent: any, args: any) => {
            const objetivos = await Objetivos.find()
                .populate('proyecto');
            return objetivos;
        },

        Objetivo: async (parent: any, args: any) => {
            const objetivo = await Objetivos.findOne({ _id: args._id })
                .populate('proyecto');
            return objetivo;
        }
    },
    Mutation: {
        crearObjetivo: async (parent: any, args: any) => {
            return await Objetivos.create(args);
        }
    },
};

export { resolversObjetivo };