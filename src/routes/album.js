import { Router } from 'express';
import AlbumController from '../controllers/Album';

const router = Router();
router.post('/add', AlbumController.NewAlbum);
router.get('/fetch/albums', AlbumController.FetchallAlbum);
export default router;
