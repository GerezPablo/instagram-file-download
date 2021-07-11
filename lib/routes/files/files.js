import express from 'express';
import { getUrl, index, post_test } from '../../controllers/file_controllers';

const router = express.Router();

router.get('/', index);
router.post('/video', getUrl);
router.post('/test', post_test);

export default router;