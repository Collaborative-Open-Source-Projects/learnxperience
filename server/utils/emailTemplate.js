const generateEmailTemplate = (courseTitle, courseDescription, courseUrl) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Course Notification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: auto;
                background: white;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
            p {
                line-height: 1.5;
                color: #555;
            }
            .btn {
                display: inline-block;
                padding: 10px 15px;
                background-color: #28a745;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 20px;
            }
            .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #888;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>New Course Alert: ${courseTitle}</h1>
            <p>${courseDescription}</p>
            <a href="#" class="btn">Check Out the Course</a>
            <div class="footer">
                <p>If you wish to unsubscribe from these emails, click here.</p>
                <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
  };
  
  export default generateEmailTemplate;