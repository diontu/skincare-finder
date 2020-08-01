import React from 'react';
import './../styles.css';

const path = require('path');

require('dotenv').config({path: '../.env'});

function ProductCard({productInfo}) {

    var baseURL = process.env.REACT_APP_BASE_SEPHORA_DOMAIN;
    if (typeof baseURL === 'undefined') {
        baseURL = process.env.BASE_SEPHORA_DOMAIN;
    }

    const imageFullURL = path.join(baseURL, productInfo.image);

    //TODO: have stars for the ratings and change the color of the links
    //TODO: have the items actually filter the items 
    //TODO: when user wants to look for ingredient, they have to press a button to make an api call to look for the ingredient 
    //TODO: 
    //TODO: if no products fits all the ingredients, find and suggest products with at least few of those ingredients
    //TODO: filter for the ingredients WITHOUT that doesn't contain SPECIFIC ingredients
    return (
        <div className="product">
            <div className="product-image">
                <img src={imageFullURL} alt={productInfo.productName + ' image'}/>
            </div>
            <div className="product-descr">{productInfo.productName}</div>
            <div className="product-brand">{productInfo.brandName}</div>
            <div className="product-ratings">Ratings + Amount of Ratings</div>
        </div>
    );
}

export default ProductCard;