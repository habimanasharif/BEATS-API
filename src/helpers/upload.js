/* eslint-disable consistent-return */
import path from 'path';
import multer from 'multer';
import crypto from 'crypto';
import { GridFsStorage } from 'multer-gridfs-storage';
import config from '../config';

const storage = new GridFsStorage({
  url: config.MONGO_URI,
  file: (req, file) => new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        return reject(err);
      }
      const filename = buf.toString('hex') + path.extname(file.originalname);
      const fileInfo = {
        filename,
        bucketName: 'uploads'
      };
      resolve(fileInfo);
    });
  })
});

export default multer({ storage });
