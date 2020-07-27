const router = require('express').Router();
const sephoraScraper = require('../scraping/sephora-skincare-products-scrape');

// returns JSON of products from all the beauty brands listed
router.route('/').get((req, res) => {

});

// returns JSON of products from sephora
router.route('/sephora').get(async (req, res) => {
    const body = await sephoraScraper.getAllItems();
    res.set('Content-type', 'application/json');
    res.json(body);
});

// returns JSON of sephora product from skuId 
router.route('/sephora/:id').get(async (req, res) => {
    const body = await sephoraScraper.getItem(req.params.id);
    res.set('Content-type', 'application/json');
    res.json(body);
});

// returns JSON of product with item id
router.route('/sephora/if').get((req, res) => {

});

module.exports = router;