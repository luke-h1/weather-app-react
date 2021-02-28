import express from 'express';
import { city } from '../controllers/weatherController.js';

const router = express.Router();

router.route('/:city').get(city);

export default router;
