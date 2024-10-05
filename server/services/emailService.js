import { sendEmail } from '../utils/sendEmail.js';
import Subscriber from '../models/subscriberModel.js';

export const emailService = {
  sendNewCourseEmails: async (courseTitle, courseDescription) => {
    try {
      // Fetch all subscribers
      const subscribers = await Subscriber.find({ unsubscribed: false });
      
      // Send an email to each subscriber
      subscribers.forEach(subscriber => {
        sendEmail(
          subscriber.email,
          `New Course: ${courseTitle}`,
          'course',
          courseTitle,
          courseDescription
        );
      });
    
      console.log('Emails queued successfully');
    } catch (error) {
      console.error('Error sending new course emails:', error);
    }
  },
  sendWelcomeEmails: async (email) => {
    try {
      // Fetch all subscribers
      const subscriber = await Subscriber.findOne({ email });
      
      // Send an email to each subscriber
      
        sendEmail(
           subscriber.email,
          `You're In! Welcome to Our Newsletter!:`,
          'welcome',
        );
    
      console.log('Emails queued successfully');
    } catch (error) {
      console.error('Error sending new course emails:', error);
    }
  }
};
