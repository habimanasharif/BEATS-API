import { Router } from 'express';
import upload from '../helpers/upload';
import AlbumController from '../controllers/Album';

const router = Router();
router.get('/', (req, res) => { res.render('album'); });
router.post('/add', upload.single('file'), AlbumController.NewAlbum);
router.get('/fetch/albums', AlbumController.FetchallAlbum);
export default router;
