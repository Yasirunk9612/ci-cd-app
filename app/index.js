const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Yasiru's App 🚀</title>
            <style>
                body {
                    background-color: #f0f8ff;
                    color: #333;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    color: #007acc;
                    font-size: 3em;
                }
                p {
                    font-size: 1.3em;
                }
                .box {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
                    display: inline-block;
                }
                .footer {
                    margin-top: 50px;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>🚀 Welcome to CI/CD Deployment!</h1>
                <p>Hello, I am <strong>Yasiru Nisal</strong>.</p>
                <p>This app is live thanks to a fully automated <strong>CI/CD pipeline</strong> powered by GitHub Actions, Docker, and EC2! 🎉</p>
                <p>✅ Build → ✅ Test → ✅ Deploy</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Yasiru Nisal | Powered by Node.js & Express</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
