const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to my Node.js site 🚀</h1><p>Using Express!</p>");
});

// About route
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1><p>This is Express backend.</p>");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
