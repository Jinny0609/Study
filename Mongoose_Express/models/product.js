const mongoose = require('mongoose');

// 상품 스키마 정의
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
});

// 모델 컴파일
const Product = mongoose.model('Product', productSchema);

// 모델 내보내기
module.exports = Product;
