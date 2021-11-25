import { Inscripciones } from "./Inscripcion"

const resolversInscripcion = {
    Query: {
        Inscripciones: async (parent: any, args: any) => {
            const inscripciones = await Inscripciones.find()
                .populate('proyecto').populate('estudiante');
            return inscripciones;
        },

        Inscripcion: async (parent: any, args: any) => {
            const inscripcion = await Inscripciones.findOne({ _id: args._id })
                .populate('proyecto').populate('estudiante');
            return inscripcion;
        }
    },

    Mutation: {
        crearInscripcion: async (parent: any, args: any) => { },

        actualizarInscripcion: async (parent: any, args: any) => { },

        eliminarInscripcion: async (parent: any, args: any) => { }
    }
}

export { resolversInscripcion }