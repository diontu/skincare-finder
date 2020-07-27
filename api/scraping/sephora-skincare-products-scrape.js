//scrapes the scripts and returns the JSON for products
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const sephoraParser = require('../parsers/sephora-parser');

require('dotenv').config({ path: '../../.env'});

async function _fetchJSONScript() {
    const res = await fetch(process.env.SEPHORA_URI);
    const html = await res.text();
    // TODO: import the parser and use the parser here.
    const $ = cheerio.load(html);
    const script = sephoraParser($.html());
    const JSONScript = JSON.parse(script);
    return JSONScript;
}

//returns array of item objects
async function getAllItems() {
    try {
        const JSONScript = await _fetchJSONScript();
        const contentItems = _extractContentItems(JSONScript);  //return array
        
        let result = [];
        const itemsKey = 'skus'; 
        contentItems.forEach((obj) => {
            if (obj.hasOwnProperty(itemsKey)) {
                obj[itemsKey].forEach((item) => {
                    result.push(item);
                });
            }
        });
        return result;

    } catch (err) {
        console.log(err);
    }
};

//returns item object
async function getItem(skuId) {
    try {
        const JSONScript = await _fetchJSONScript();
        const contentItems = _extractContentItems(JSONScript);  //return array

        let result;
        const itemsKey = 'skus';
        contentItems.forEach((obj) => {
            if (obj.hasOwnProperty(itemsKey)) {
                obj[itemsKey].forEach((item) => {
                    if (item.skuId === skuId) {
                        result = item;
                    }
                });
            }
        });
        return result;

    } catch (err) {
        console.log(err);
    }
}

const _extractContentItems = (JSONScript) => {
    let props;
    JSONScript.forEach((obj) => {
        if (obj.class === "RootCategoryPage") {
            props = obj.props;
        }
    });
    return props.contentItems;
}

module.exports = {
    getAllItems,
    getItem,
};