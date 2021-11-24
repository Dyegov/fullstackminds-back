import { Inscripciones } from "./Inscripciones"

const resolversInscripciones = {
    Query: {
        Inscripciones: async (parent: any, args: any) => {
            const inscripciones = await Inscripciones.find();
            return inscripciones;
        },

        Inscripcion: async (parent: any, args: any) => {
            const inscripcion = await Inscripciones.findOne({ _id: args._id });
            return inscripcion;
        }
    },

    Mutation: {
        crearInscripcion: async (parent: any, args: any) => { },

        actualizarInscripcion: async (parent: any, args: any) => { },

        eliminarInscripcion: async (parent: any, args: any) => { }
    }
}

export { resolversInscripciones }