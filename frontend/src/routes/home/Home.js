import React from 'react';
import '../../styles.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import SearchBar from './../../components/search-bar';
import ProductCard from './../../components/product-card';
import ToggleFilterBar from './../../components/toggle-filter-bar';

const path = require('path');

function Home() {

    const products = useSelector(state => state.products);
    const linkURL = '/product/' + products.data[0].skuId;

    return(
        <div className="body">
            <h1>Find the right Skincare Product for you</h1>
            <ToggleFilterBar />
            <SearchBar />
            <div className="products-body">
                {products.data.map(product => (
                    <div className="space-inbetween">
                        <Link to={'/product/' + product.skuId} className="no-text-dec"><ProductCard productInfo={product}/></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;