// Imports
const express = require('express');
const cors = require('cors');

// App
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// BD
require('./db.ts');

// import routers
import { routerInscripciones } from './routers/Inscripciones';
import { routerProyectos } from './routers/Proyectos';
import { routerAvances } from './routers/Avances';
import { routerUsuarios } from './routers/Usuarios';
import { routerObjetivos } from './routers/Objetivos';

// use routers
app.use('/inscripciones', routerInscripciones);
app.use('/proyectos', routerProyectos);
app.use('/avances', routerAvances);
app.use('/usuarios', routerUsuarios);
app.use('/objetivos', routerObjetivos);

// Server
app.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});
