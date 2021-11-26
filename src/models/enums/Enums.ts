enum Enum_EstadoProyecto {
  activo = 'Activo',
  inactivo = 'Inactivo',
}

enum Enum_TipoObjetivo {
  general = 'General',
  especifico = 'Especifico',
}

enum Enum_FaseProyecto {
  iniciado = 'Iniciado',
  desarrollo = 'Desarrollo',
  terminado = 'Terminado',
  nula = '',
}

enum Enum_EstadoInscripcion {
  ACEPTADA = 'ACEPTADA',
  RECHAZADA = 'RECHAZADA',
  PENDIENTE = 'PENDIENTE'
}

enum Enum_Rol {
  estudiante = 'Estudiante',
  lider = 'Lider',
  administrador = 'Administrador',
}

enum Enum_EstadoUsuario {
  pendiente = 'Pendiente',
  autorizado = 'Autorizado',
  no_autorizado = 'No Autorizado',
}

export { Enum_EstadoProyecto, Enum_TipoObjetivo, Enum_FaseProyecto, Enum_EstadoInscripcion, Enum_Rol, Enum_EstadoUsuario };
