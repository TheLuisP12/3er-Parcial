const express = require('express');
const app = express();

app.use(express.json());

let storage = [];

app.post('/store', (req, res) => {
    const { data } = req.body;
    storage.push(data);
    res.json({ message: "Data stored successfully", storage });
});

app.get('/store', (req, res) => {
    res.json({ storage });
});

app.listen(5001, () => console.log("Storage service running on port 5001"));