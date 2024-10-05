import express from 'express';
import {newsletterController} from '../controller/newsletterController.js';
const router = express.Router();

router.post('/subscribe', newsletterController.addSubscriber);

export default router ;