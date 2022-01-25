// eslint-disable-next-line import/prefer-default-export
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import SongService from '../database/services/Song';

export const allAlbum = async (albums) => {
  try {
    albums = await Promise.all(albums.map(async (album) => {
      const songs = await SongService.fetchSongs({ playlist: album._id });
      album._doc.songsNo = songs.length;
      return album;
    }));
    return albums;
  } catch (error) {
    throw error;
  }
};
