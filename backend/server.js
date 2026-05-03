const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// API test route
app.get('/api', (req, res) => {
res.json({ message: "API Running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
