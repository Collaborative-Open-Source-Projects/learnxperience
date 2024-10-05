import nodemailer from 'nodemailer';
import generateEmailTemplate from './emailTemplate.js';
import welcomeEmailTemplate from './welcomeEmailTemplate.js';

export const sendEmail = async (to, subject, templateType, courseTitle, courseDescription) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    let htmlContent;

    // Use the appropriate template based on the type
    if (templateType === 'welcome') {
      htmlContent = welcomeEmailTemplate();
    } else if (templateType === 'course') {
      htmlContent = generateEmailTemplate(courseTitle, courseDescription);
    } else {
      throw new Error('Invalid template type provided');
    }
    
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to, // Recipient email(s)
      subject,
      html: htmlContent
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
