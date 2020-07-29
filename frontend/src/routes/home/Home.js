import React from 'react';
import '../../styles.css';
import {useSelector} from 'react-redux';

import SearchBar from './../../components/search-bar';
import ProductCard from './../../components/product-card';

function Home() {

    const products = useSelector(state => state.products);

    return(
        <div className="body">
            <SearchBar />
        </div>
    );
}

export default Home;