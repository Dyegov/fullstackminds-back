// Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// App
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// BD
require('db.ts');

// Models

// Routes
app.get('/', (req: any, res: any) => {
  res.send('test');
});

// Server
app.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});
