import React, { useState} from 'react';
import '../../styles.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Loading from './../../components/Loading';

import SearchBar from './../../components/search-bar';
import ProductCard from './../../components/product-card';
import ToggleFilterBar from './../../components/toggle-filter-bar';
import FadeIn from 'react-fade-in';

const path = require('path');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    //forces a re-render after an change in state occurs
    componentDidUpdate() {
        this.setState();
    }

    // --------------------- 1.  must get the fade in after each search -----------------------------
    // --------------------- 2.  get the ingredient search working (rn shows all the ingredients) ------------------------------------
    render() {
        return(
            <div className="body">
                <h1>Find the right Skincare Product for you</h1>
                <ToggleFilterBar />
                <SearchBar />
                {!this.props.state.loadedSearchResults? <Loading/> : ( 
                    <div className="products-body">
                        {this.props.state.searchResults.map(product => (
                            <div className="space-inbetween">
                                <Link to={'/product/' + product.skuId} className="no-text-dec"><ProductCard productInfo={product}/></Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps)(Home);