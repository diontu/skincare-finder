const router = require('express').Router();
const sephoraScraper = require('../scraping/sephora-skincare-products-scrape');
const productIngredientScraper = require('./../scraping/sephora-product-ingredient-scrape');
const ProductModel = require('./../../models/productModel');

// returns JSON of products from all the beauty brands listed
// router.route('/').get((req, res) => {

// });

// returns JSON of products from sephora
router.route('/sephora').get(async (req, res) => {
    try {
        const products = await sephoraScraper.getAllItems();

        //update the db
        await ProductModel.remove({}); // remove all documents within the poducts collection.
        products.forEach(async (product) => {
            const newDoc = new ProductModel({
                productName: product.productName,
                skuId: product.skuId,
                targetUrl: product.targetUrl
            });
            await newDoc.save();
        });

        res.set('Content-type', 'application/json');
        res.json(products);

    } catch (err) {
        console.log(err)
    }
});

// returns JSON of sephora product from skuId 
router.route('/sephora/:id').get(async (req, res) => {
    const body = await sephoraScraper.getItem(req.params.id);
    res.set('Content-type', 'application/json');
    res.json(body);
});

// returns JSON of product with item id
// router.route('/sephora/id').get((req, res) => {

// });

//find the ingredients in the product page (only one)
router.route('/sephora/ingredients/:skuid').get(async (req, res) => {
    const product = await ProductModel.findOne({skuId: req.params.skuid});
    const ingredients = await productIngredientScraper.findIngredientsForProduct(product.targetUrl);//param: targetURL -- have to get from the db
    res.set('Content-type', 'application/json');
    res.json(ingredients);
});

module.exports = router;