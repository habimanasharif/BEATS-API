/* eslint-disable consistent-return */
import out from '../helpers/response';
import AlbumService from '../database/services/Album';

class AlbumController {
  static async NewAlbum(req, res) {
    try {
      const newAlbum = await AlbumService.addAlbum(req.body);
      return out(res, 200, 'Album', newAlbum);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async FetchallAlbum(req, res) {
    try {
      const albums = await AlbumService.fetchAllAlbum();
      return out(res, 200, 'Albums', albums);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default AlbumController;
