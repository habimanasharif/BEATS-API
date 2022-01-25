/* eslint-disable consistent-return */
import out from '../helpers/response';
import { allAlbum } from '../helpers/iterator';
import AlbumService from '../database/services/Album';

class AlbumController {
  static async NewAlbum(req, res) {
    try {
      const album = {
        cover: req.file.filename,
        albumname: req.body.playlist,
        description: req.body.description

      };
      const newAlbum = await AlbumService.addAlbum(album);
      return out(res, 200, 'Album', newAlbum);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async FetchallAlbum(req, res) {
    try {
      const albums = await AlbumService.fetchAllAlbum();
      const response = await allAlbum(albums);
      return out(res, 200, 'Albums', response);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default AlbumController;
