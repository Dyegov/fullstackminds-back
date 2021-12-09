import { Usuarios } from './Usuarios';
const bcrypt = require('bcrypt');

const resolversUsuario = {
  Query: {
    Usuarios: async (parent: any, args: any) => {
      const usuarios = await Usuarios.find();
      return usuarios;
    },
    Usuario: async (parent: any, args: any) => {
      const usuario = await Usuarios.findOne({ _id: args._id });
      return usuario;
    },
  },
  Mutation: {
    crearUsuario: async (parent: any, args: any) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const usuarioCreado = await Usuarios.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword,
      });

      if (Object.keys(args).includes('estado')) {
        usuarioCreado.estado = args.estado;
      }

      return usuarioCreado;
    },
    editarUsuario: async (parent: any, args: any) => {
      const usuarioEditado = await Usuarios.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        estado: args.estado,
      });

      return usuarioEditado;
    },
    eliminarUsuario: async (parent: any, args: any) => {
      if (Object.keys(args).includes('_id')) {
        const usuarioEliminado = await Usuarios.findOneAndDelete({ _id: args._id });
        return usuarioEliminado;
      } else if (Object.keys(args).includes('correo')) {
        const usuarioEliminado = await Usuarios.findOneAndDelete({ correo: args.correo });
        return usuarioEliminado;
      }
    },
    Login: async (parent: any, args: any) => {
      const usuarioEcontrado = await Usuarios.findOne({ correo: args.correo });
      if (usuarioEcontrado) {
        if (await bcrypt.compare(args.password, usuarioEcontrado.password)) {
          return usuarioEcontrado;
        }
      }
    },
  },
};

export { resolversUsuario };
