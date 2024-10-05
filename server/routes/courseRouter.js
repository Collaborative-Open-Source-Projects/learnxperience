import express from 'express';
import {courseController} from '../controller/courseController.js';
const router = express.Router();

router.post('/course/create', courseController.addCourse);

export default router ;