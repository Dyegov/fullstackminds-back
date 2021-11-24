import { gql } from 'apollo-server-express';

const tiposEnums = gql`
    enum Enum_EstadoInscripcion {
        ACEPTADA
        RECHAZADA
        PENDIENTE
  }
`;

export { tiposEnums };