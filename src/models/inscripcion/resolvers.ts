import { Inscripciones } from "./Inscripcion"
import { Proyectos } from '../proyecto/Proyectos'

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
        crearInscripcion: async (parent: any, args: any) => {
            return await Inscripciones.create(args);
        },

        actualizarInscripcion: async (parent: any, args: any) => {
            if (args.estado === 'ACEPTADA') {
                const proyecto = await Proyectos.findOne({ _id: args.proyecto });
                if (proyecto!.estado === 'INACTIVO' || proyecto!.fase === 'TERMINADO') {
                    return await Inscripciones.findByIdAndUpdate(
                        { _id: args._id },
                        { fechaEgreso: new Date() },
                        { new: true, runValidators: true })
                }
            }
        },

        decidirInscripcion: async (parent: any, args: any) => {
            if (args.estado === 'ACEPTADA') { args.fechaIngreso = Date.now() }
            return await Inscripciones.findByIdAndUpdate(
                { _id: args._id }, args, { new: true, runValidators: true }
            )
        },

        eliminarInscripcion: async (parent: any, args: any) => {
            return await Inscripciones.findByIdAndDelete({ _id: args._id })
        }
    }
}

export { resolversInscripcion }