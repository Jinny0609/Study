// index.js

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverridde = require('method-override')


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

app.use(express.urlencoded({extended: true})) //추가
app.use(methodOverridde('_method'))

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
  res.render('products/new');
});

app.post('/products', async (req, res) => {
  // console.log(req.body) // 생성된 상품 정보를 콘솔에 출력
  const newProduct = new Product(req.body); // 새 상품 만들기
  await newProduct.save(); 
  console.log(newProduct);  // 작업을 알기위해서 콘솔에 출력
  // res.send('making your product!')
  res.redirect(`/products/${newProduct._id}`)
})

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

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product })
})

app.put('/products/:id', async(req, res) => {
  const {id} = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true});
  res.redirect(`/products/${product._id}`);
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
});



