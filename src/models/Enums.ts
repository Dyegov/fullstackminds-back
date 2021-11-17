enum Enum_EstadoProyecto {
  activo = 'Activo',
  inactivo = 'Inactivo',
}

enum Enum_TipoObjetivo {
  general = 'GENERAL',
  especifico = 'ESPECIFICO',
}

enum Enum_FaseProyecto {
  iniciado = 'Iniciado',
  desarrollo = 'Desarrollo',
  terminado = 'Terminado',
  nula = '',
}

enum Enum_EstadoIncripcion {
  aceptada = 'Aceptada',
  rechazada = 'Rechazada',
}

export { Enum_EstadoProyecto, Enum_TipoObjetivo, Enum_FaseProyecto, Enum_EstadoIncripcion };
