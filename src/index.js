const express = require('express');
const app = express();
const path = require('path');

const route = require('./routes/weather');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname + "/build")));

// Routes which should handle requests
app.use('/api/weather', route);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/build/index.html"));
//   });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
