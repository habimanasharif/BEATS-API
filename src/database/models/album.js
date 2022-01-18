import mongoose from 'mongoose';

const { Schema } = mongoose;
const AlbumSchema = new Schema({
  albumname: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    default: Date.now(),
    type: Date,
  },
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
