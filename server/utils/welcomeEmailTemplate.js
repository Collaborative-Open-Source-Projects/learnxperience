 const welcomeEmailTemplate = () => {
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 5px; max-width: 600px; margin: auto;">
        <div style="background-color: #4CAF50; padding: 20px; border-radius: 5px 5px 0 0; text-align: center;">
          <h1 style="color: white;">Welcome to Our Newsletter!</h1>
        </div>
        <div style="padding: 20px; text-align: left;">
          <p>Dear Subscriber,</p>
          <p>Thank you for subscribing to our newsletter! We're excited to have you on board.</p>
          <p>You'll now receive regular updates on our latest courses, exclusive offers, and educational resources tailored just for you.</p>
          <p>If you have any questions or feedback, feel free to reply to this email. We're here to help!</p>
          <p>Stay tuned for our upcoming newsletters!</p>
          <p>Best regards,</p>
          <p>The LearnXperience Team</p>
        </div>
        <div style="background-color: #e7e7e7; padding: 10px; text-align: center; border-radius: 0 0 5px 5px;">
          <p style="font-size: 12px;">&copy; ${new Date().getFullYear()} LearnXperience. All rights reserved.</p>
        </div>
      </div>
    `;
  };
  export default welcomeEmailTemplate;