const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header to indicate HTML content
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // HTML content for the portfolio page
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Portfolio - Shakeel Ayaan</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          color: #333;
        }
        header {
          background-color: #4CAF50;
          color: white;
          text-align: center;
          padding: 20px;
        }
        main {
          padding: 20px;
          background-color: white;
        }
        h1 {
          font-size: 36px;
          margin-bottom: 10px;
        }
        h2 {
          font-size: 24px;
          margin-top: 0;
        }
        .contact-info {
          margin-top: 20px;
        }
        footer {
          background-color: #4CAF50;
          color: white;
          text-align: center;
          padding: 10px;
          position: fixed;
          width: 100%;
          bottom: 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Shakeel Ayaan</h1>
        <h2>Full Stack Developer</h2>
      </header>

      <main class="container">
        <section>
          <h2>About Me</h2>
          <p>Hello! I am Shakeel Ayaan, a passionate Full Stack Developer with experience in creating modern and responsive web applications. I specialize in JavaScript, Node.js, and modern web technologies. I am always looking to learn and grow in the field of web development.</p>
        </section>

        <section class="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Phone:</strong> 7387731313</li>
            <li><strong>Email:</strong> <a href="mailto:shakeelayaan3@gmail.com">shakeelayaan3@gmail.com</a></li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Shakeel Ayaan | All Rights Reserved</p>
      </footer>
    </body>
    </html>
  `;

  // Send the HTML response
  res.end(htmlContent);
});

// Set the port for the server to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
