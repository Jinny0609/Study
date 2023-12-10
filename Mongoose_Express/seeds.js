// seeds.js

const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.error("OH NO MONGO CONNECTION ERROR!!!!");
    console.error(err);
  });

//   const p = new Product({
//     name:  'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
//   })
//   p.save().then(p =>{
//     console.log(p)
//   })
//     .catch(e=>{
//         console.log(e)
//     })

const seedProducts = [
    { name: 'Ruby Grapefruit', price: 1.99, category: 'fruit' },
    { name: 'Cucumber', price: 0.99, category: 'vegetable' },
    { name: 'Milk', price: 2.5, category: 'dairy' },
    // ... 추가 상품 데이터
];

Product.insertMany(seedProducts)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });