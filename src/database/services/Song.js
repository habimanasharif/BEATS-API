import Song from '../models/Song';

class SongService {
  static async addSong(add) {
    try {
      return await Song.create(add);
    } catch (error) {
      throw error;
    }
  }

  static async fetchSongs(album) {
    try {
      return await Song.find(album);
    } catch (error) {
      throw error;
    }
  }
}

export default SongService;
