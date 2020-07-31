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