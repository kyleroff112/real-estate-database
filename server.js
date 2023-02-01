const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
app.use(express.static('public'));

app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '/public/'))})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.....`)
})