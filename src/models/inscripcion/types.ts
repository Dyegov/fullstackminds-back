import { gql } from "apollo-server-express";

const tiposInscripcion = gql`

  type Inscripcion {
    _id: ID!
    proyecto: String!
    estudiante: String!
    estado: Enum_EstadoIncripcion
    fechaIngreso: Date!
    fechaEgreso: Date!
  }

  type Query {
    Inscripciones: [Inscripcion]
    Inscripcion(_id : String!): Inscripcion
  }

  type Mutation {
    crearInscripcion(): Inscripcion

    actualizarInscripcion(): Inscripcion

    eliminarInscripcion(): Inscripcion
  }
`;

export { tiposInscripcion };
