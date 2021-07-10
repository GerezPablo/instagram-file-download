import express from 'express';
import { getUrl, index } from '../../controllers/file_controllers';

const router = express.Router();

router.get('/', index);
router.post('/video', getUrl);

export default router;