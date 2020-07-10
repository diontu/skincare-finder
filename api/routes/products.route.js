const router = require('express').Router();
const sephoraScraper = require('../scraping/sephora-scrape');

// returns JSON of products from all the beauty brands listed
router.route('/').get((req, res) => {

});

// returns JSON of products from sephora
router.route('/sephora').get(async (req, res) => {
    const body = await sephoraScraper();
    res.set('Content-type', 'text/plain');
    res.send(body);
});

// returns JSON of product with item id
router.route('/sephora/:id').get((req, res) => {

});

module.exports = router;