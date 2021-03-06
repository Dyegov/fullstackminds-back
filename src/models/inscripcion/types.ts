import { gql } from "apollo-server-express";

const tiposInscripcion = gql`

  type Inscripcion {
    _id: ID!
    proyecto: Proyecto! 
    estudiante: Usuario!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
  }

  type Query {
    Inscripciones: [Inscripcion]
    Inscripcion(_id: String!): Inscripcion
  }

  type Mutation {
    crearInscripcion(
      proyecto: String! 
      estudiante: String!
    ): Inscripcion

    actualizarInscripcion(
      _id: String!
      estado: Enum_EstadoInscripcion!
      proyecto: String!
    ): Inscripcion

    decidirInscripcion(
      _id: String!
      estado: Enum_EstadoInscripcion!
    ): Inscripcion

    eliminarInscripcion(_id: String!): Inscripcion
  }
`;

export { tiposInscripcion };
