const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: String,
    skuId: Number,
    targetUrl: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;