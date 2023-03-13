/* eslint-disable max-len */
/* eslint-disable no-console */
import mongoose from 'mongoose';
// import config from '../config';

export default async () => {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.xd7hg.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database Connected');
  })
    .catch((err) => {
      console.log(err);
    });
};
