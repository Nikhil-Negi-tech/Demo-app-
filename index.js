require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 4444;

// app.set('view engine', 'hbs');
// app.use(express.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req,res) => {
    res.send('nikhil_negi_dot_com');
});

app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${PORT}`);
});