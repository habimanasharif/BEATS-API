import mongoose from 'mongoose';

const { Schema } = mongoose;
const SongSchema = new Schema({
  originalname: {
    type: String,
    required: true
  },
  artistname: {
    type: String,
    required: true
  },
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
    required: true,
  },
  filename: {
    type: String,
    required: true
  },

  createdAt: {
    default: Date.now(),
    type: Date,
  },
});

const Song = mongoose.model('song', SongSchema);

module.exports = Song;
