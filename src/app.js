/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import Grid from 'gridfs-stream';
import dbConnect from './database';
import routes from './routes';
import config from './config';

const app = express();
dbConnect();

app.enable('trust proxy');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(routes);
// const mongoURI = 'mongodb+srv://admin:admin@cluster0.ayqwu.mongodb.net/TourRadar?retryWrites=true&w=majority';
// mongo connection
const conn = mongoose.createConnection(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let gfs;
// init gfs
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

app.get('/song/play/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // Read output to browser
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  });
});
app.get('/image/view/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // Read output to browser
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  });
});

export default app;
