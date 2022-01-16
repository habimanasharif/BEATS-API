/* eslint-disable consistent-return */
import out from '../helpers/response';
import SongService from '../database/services/Song';

class SongController {
  static async AddSong(req, res) {
    try {
      const { filename } = req.file;
      const song = {
        originalname: req.body.songname,
        filename,
        artistname: req.body.artistname,
        caption: req.body.caption,
        playlist: req.body.playlist
      };
      const newSong = await SongService.addSong(song);
      return out(res, 200, 'Song', newSong);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async fetchSongs(req, res) {
    try {
      const Song = await SongService.fetchSongs({ playlist: req.params.playlist });
      return out(res, 200, 'Song', Song);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default SongController;
