const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.error("OH NO ERROR!!!!");
    console.error(err);
  })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`;
});

personSchema.pre('save', async function () {
  this.first = 'Yo';
  this.last = 'MAMA';
  console.log("ABOUT TO SAVE!!!!");
})

personSchema.post('save', async function () {
  console.log("JUST SAVED!!!!");
})

const Person = mongoose.model('Person', personSchema);

// const tammy = new Person({ first: 'Tammy', last: 'Chow' }); 

// console.log(tammy.fullName); // Tammy Chow