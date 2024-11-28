const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.post('/attendance', (req, res) => {
    const { name, rollNumber, latitude, longitude } = req.body;
    // Save data to the database
    res.json({ message: "Attendance recorded", data: req.body });
});

app.listen(3000, () => console.log('Server running on port 3000'));
