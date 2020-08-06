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
    // console.log(targetURL); //---- comment
    const ingredients = _extractIngredients(ingredientDescHtml);
    // return ingredientDescHtml; // ------ comment
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

    // console.log([...firstMatch, ...secondMatch]);
    return [...firstMatch, ...secondMatch];
};

const getFirstMatchIngredients = (ingredientDescHtml) => {
    // console.log(ingredientDescHtml);
    let firstMatch = ingredientDescHtml.match(/[\s<>]+[-]([1-9a-zA-Z-%(),.\s]*):/g); //working... i hope
    if (firstMatch == null) return []; 
    firstMatch = firstMatch.map(match => match.substring(1, match.length-1).trim());
    // console.log(firstMatch);
    return firstMatch;
};

const getSecondMatchIngredients = (ingredientDescHtml) => {
    //might replace the following regex with one that LOOKSAHEAD (https://stackoverflow.com/questions/47640868/javascript-match-regular-expression-with-reverse-quantifier-or-parse-right-to)
    let secondMatchString = ingredientDescHtml.match(/<br>[\s]*<br>(.*\n*.*)[<br><br>]*/g); //working... i hope
    let secondMatch;
    try { 
        if (secondMatchString != null) {
            // console.log(secondMatchString); // ----- comment
            secondMatchString = secondMatchString.pop();
            // console.log(secondMatchString); // ----- comment
            let intermediarySecondMatch = secondMatchString.match(/[-\/()\w\s\*]*[,.]/g);
            // console.log(intermediarySecondMatch); // ----- comment
            secondMatch = intermediarySecondMatch.map(match => match.substring(0, match.length-1).trim());
    
        } 
        else {
            let intermediarySecondMatch = ingredientDescHtml.match(/[-\/()\w\s\*]*[,.]/g);
            secondMatch = intermediarySecondMatch.map(match => match.substring(0, match.length-1).trim());
        }
    } catch (err) {
        console.error(err);
        return [];
    }
    return secondMatch;
};

module.exports = { 
    findIngredientsForProduct
};