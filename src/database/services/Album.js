import Album from '../models/album';

class AlbumService {
  static async addAlbum(newAlbum) {
    try {
      return await Album.create(newAlbum);
    } catch (error) {
      throw error;
    }
  }

  static async fetchAllAlbum() {
    try {
      return await Album.find();
    } catch (error) {
      throw error;
    }
  }
}

export default AlbumService;
