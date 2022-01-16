import { Router } from 'express';
import upload from '../helpers/upload';
import SongController from '../controllers/Song';

const router = Router();

router.get('/', (req, res) => { res.render('index'); });

router.post('/upload', upload.single('file'), SongController.AddSong);
router.get('/fetch/:playlist', SongController.fetchSongs);
export default router;
