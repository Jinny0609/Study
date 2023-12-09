// index.js

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/your-database-name')
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.error("OH NO MONGO CONNECTION ERROR!!!!");
    console.error(err);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.listen(3000, () => {
//     console.log("APP IS LISTENING ON PORT 3000!");
// });

app.get('/dog', (req, res) => {
    res.send('WOOF!');
});



