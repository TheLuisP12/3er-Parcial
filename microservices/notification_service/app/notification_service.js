const express = require('express');
const app = express();

app.use(express.json());

app.post('/notify', (req, res) => {
    const { message } = req.body;
    res.json({ notification: `Notification sent: ${message}` });
});

app.listen(5002, () => console.log("Notification service running on port 5002"));
