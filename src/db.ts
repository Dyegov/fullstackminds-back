const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then((db: any) => console.log('BD Conectada'))
  .catch((err: any) => console.log(err));
