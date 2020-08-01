//scrapes the sephora product page for the ingredients
const fetch = require('node-fetch');
const path = require('path');
const parser = require('./../parsers/sephora-product-ingredient-parser');
const { strict } = require('assert');

async function findIngredientsForProduct(targetURL) {
    const res = await fetch(String(process.env.BASE_SEPHORA_DOMAIN + targetURL));
    const html = await res.text();
    // const $ = cheerio.load(html);
    const script = parser(html);
    const JSONScript = JSON.parse(script);
    const ingredientDescHtml = _extractContentItems(JSONScript);
    const ingredients = _extractIngredients(ingredientDescHtml);
    return ingredients;
}

const _extractContentItems = (JSONScript) => {
    let props;
    JSONScript.forEach((obj) => {
        if (obj.class === "RegularProductTop") {
            props = obj.props;
        }
    });
    return props.currentProduct.currentSku.ingredientDesc;
}

//parses the ingredients from the html
const _extractIngredients = (ingredientDescHtml) => {
    let firstMatch = getFirstMatchIngredients(ingredientDescHtml);
    let secondMatch = getSecondMatchIngredients(ingredientDescHtml);

    return [...firstMatch, ...secondMatch];
};

const getFirstMatchIngredients = (ingredientDescHtml) => {
    let firstMatch = ingredientDescHtml.match(/[-]([1-9a-zA-Z-%()\s]*):/g); //working... i hope
    firstMatch = firstMatch.map(match => match.substring(1, match.length-1).trim());
    return firstMatch;
};

const getSecondMatchIngredients = (ingredientDescHtml) => {
    let secondMatchString = ingredientDescHtml.match(/<br><br>(.*\s)<br>/).pop(); //working... i hope
    let intermediarySecondMatch = secondMatchString.match(/[-\/()\w\s]*[,.]/g);
    let secondMatch = intermediarySecondMatch.map(match => match.substring(0, match.length-1).trim());
    return secondMatch;
};

module.exports = { 
    findIngredientsForProduct
};