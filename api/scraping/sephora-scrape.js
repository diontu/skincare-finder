const cheerio = require('cheerio');
const fetch = require('node-fetch');


require('dotenv').config({ path: '../../.env'});

module.exports = async () => {
    try {
        const res = await fetch(process.env.SEPHORA_URI);
        const html = await res.text();
        // TODO: import the parser and use the parser here.
        const $ = cheerio.load(html);
        return $.html();
    } catch (err) {
        console.log(err);
    }
};