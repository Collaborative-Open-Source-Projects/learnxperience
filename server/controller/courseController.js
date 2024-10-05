// controllers/courseController.js
import Course from '../models/courseModel.js';
import { emailService } from '../services/emailService.js';

export const courseController = {
  addCourse: async (req, res) => {
    const { title, description } = req.body;

    try {
      // Create new course
      const newCourse = new Course({ title, description });
      await newCourse.save();

      // Call email service to send course notification emails
      emailService.sendNewCourseEmails(title, description);

      res.status(201).json({ message: 'Course added successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add course.' });
    }
  }
};
