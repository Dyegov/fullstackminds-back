import { gql } from 'apollo-server-express';

const tiposObjetivo = gql`
type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
    proyecto: Proyecto! 
}

type Query {
    Objetivos: [Objetivo]
    Objetivo(_id: String!): Objetivo
}

type Mutation {
    crearObjetivo(
        descripcion: String!
        tipo: Enum_TipoObjetivo!
        proyecto: Proyecto!
    ): Objetivo
  }
`;

export { tiposObjetivo };