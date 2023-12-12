// index.js

const express = require('express');
const app = express();
const path = require('path');
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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index', { products });
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
  // console.log(product);
  res.render('products/show', { product })
})

// 오류 처리 까지 한거
// app.get('/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     console.log(product); // 터미널에서 확인용

//     if (!product) {
//       return res.status(404).send('Product not found');
//     }

//     res.render('products/show', { product });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
});



