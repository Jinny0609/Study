const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.error("OH NO ERROR!!!!");
    console.error(err);
  });

  // {
  //   title: 'Amadeus',
  //   year: 1986,
  //   score: 9.2,
  //   rating: 'R'
  // }

  const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
  });

const Movie = mongoose.model('Movie', movieSchema);
const Amadeus = new Movie({ title : 'Amadeus', year: 1986, score: 9.2, rating: 'R'})