enum Enum_EstadoProyecto {
  activo = 'ACTIVO',
  inactivo = 'INACTIVO',
}

enum Enum_TipoObjetivo {
  general = 'GENERAL',
  especifico = 'ESPECIFICO',
}

enum Enum_FaseProyecto {
  iniciado = 'INICIADO',
  desarrollo = 'DESARROLLO',
  terminado = 'TERMINADO',
  nula = '',
}

enum Enum_EstadoInscripcion {
  ACEPTADA = 'ACEPTADA',
  RECHAZADA = 'RECHAZADA',
  PENDIENTE = 'PENDIENTE',
}

enum Enum_Rol {
  estudiante = 'ESTUDIANTE',
  lider = 'LIDER',
  administrador = 'ADMINISTRADOR',
}

enum Enum_EstadoUsuario {
  pendiente = 'PENDIENTE',
  autorizado = 'AUTORIZADO',
  no_autorizado = 'NO AUTORIZADO',
}

export {
  Enum_EstadoProyecto,
  Enum_TipoObjetivo,
  Enum_FaseProyecto,
  Enum_EstadoInscripcion,
  Enum_Rol,
  Enum_EstadoUsuario,
};
