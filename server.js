const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname), {
  maxAge: '1d', // Cache static files for 1 day
  etag: true
}));

// Explicit routes for HTML pages
const pages = ['index.html', 'about-us.html', 'services.html', 'gallery.html', 'contact.html', 'thank-you.html'];
pages.forEach(page => {
  app.get('/' + page, (req, res) => {
    res.sendFile(path.join(__dirname, page));
  });
});

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 - Page Not Found | Saffron Caterers</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; padding: 20px;">
        <h1 style="font-size: 6rem; color: #d4a574; margin: 0;">404</h1>
        <h2 style="font-size: 2rem; color: #333; margin: 20px 0;">Page Not Found</h2>
        <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px;">The page you're looking for doesn't exist.</p>
        <a href="/" style="padding: 15px 30px; background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%); color: white; text-decoration: none; border-radius: 50px; font-weight: 600;">Return Home</a>
      </div>
    </body>
    </html>
  `);
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>500 - Server Error | Saffron Caterers</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; padding: 20px;">
        <h1 style="font-size: 6rem; color: #d4a574; margin: 0;">500</h1>
        <h2 style="font-size: 2rem; color: #333; margin: 20px 0;">Server Error</h2>
        <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px;">Something went wrong on our end. Please try again later.</p>
        <a href="/" style="padding: 15px 30px; background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%); color: white; text-decoration: none; border-radius: 50px; font-weight: 600;">Return Home</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Saffron Caterers website is running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});
