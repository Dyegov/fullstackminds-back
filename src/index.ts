// Imports
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { tipos } from './graphql/types';
import { resolvers } from './graphql/resolvers';
import dotenv from 'dotenv';
dotenv.config();

// Intanciar servidor de Apollo
// const server = new ApolloServer({
//   typeDefs: tipos,
//   resolvers: resolvers,
// });

// App
const app = express();
const PORT = process.env.PORT || 3001;

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
app.listen(PORT, async () => {
  // await server.start();
  // server.applyMiddleware({ app });
  console.log(`API corriendo en el puerto ${PORT}`);
});