// server.js
const express = require('express');
const app = express();
const PORT = 3000;

const NAME = process.env.NAME || '';

const fs = require('fs');

app.get('/file', (req, res) => {
    fs.readFile('/app/data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).send("Error reading file!");
            return;
        }
        res.send(data);
    });
});

app.get('/', (req, res) => {
    res.send(`Hello ${NAME}, Docker with Express!`);
});

// Crash endpoint
app.get('/crash', (req, res) => {
    throw new Error("Intentional crash for debugging purposes!");
});

// Async crash endpoint
app.get('/async-crash', async (req, res) => {
    await new Promise((_, reject) => reject("Async error for debugging!"));
    res.send("This will never get sent.");
});

// Shutdown endpoint
app.get('/shutdown', (req, res) => {
    res.send("Shutting down...");
    process.exit(1); // Exit the process with an error code
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

