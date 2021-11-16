mongoose
  .connect('')
  .then((db: any) => console.log('BD Conectada'))
  .catch((err: any) => console.log(err));
