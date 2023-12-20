const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('데이터베이스 연결됨');
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res)=> {
    res.render('home')
}) 

// 라우트 추가
app.get('/makecampground', async (req, res) => {
    const camp = new Campground({
      name: '나의 뒷마당',
      price: '50,000원',
      description: '값 싼 캠핑!',
      location: '서울',
    });
    await camp.save();
    res.send(camp);
  });

app.listen(3000, () => {
    console.log('Sercing on port 3000')
})