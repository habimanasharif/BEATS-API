import { Router } from 'express';
import songs from './songs';
import album from './album';

const router = Router();

router.use('/song', songs);
router.use('/album', album);

export default router;
