const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.error("OH NO ERROR!!!!");
    console.error(err);
  });

  const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
  });
  
const Movie = mongoose.model('Movie', movieSchema);
const Amadeus = new Movie({ title : 'Amadeus', year: 1986, score: 9.2, rating: 'R'})

Movie.insertMany([
  { title: "Amelie", releaseYear: 2022, rating: 8.3, grade: "R" },
  { title: "Alien", releaseYear: 1979, rating: 8.3, grade: "R" },
  { title: "The Iron Giant", releaseYear: 1999, rating: 8.3, grade: "PG" },
  { title: "Stand By Me", releaseYear: 1986, rating: 8.3, grade: "R" },
  { title: "Moonrise Kingdom", releaseYear: 2012, rating: 8.3, grade: "PG-13" },
])
  .then(data=> {
    console.log("IT WORKED!")
    console.log(data);
  })
