import React from 'react';
import '../styles.css';
import { connect } from 'react-redux';
import { toggleSearch } from '../redux/actions/products-actions';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.state,
            searchFocused: false
        };
        this.searchInFocus = this.searchInFocus.bind(this);
        this.searchNotInFocus = this.searchNotInFocus.bind(this);
    }
    
    searchInFocus() {
        this.setState({
            searchFocused: true
        });
    }

    searchNotInFocus() {
        this.setState({
            searchFocused: false
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className={this.state.searchFocused? "search-bar-focused" : "search-bar"}>
                <input className="search-bar-input" type="text" placeholder={this.props.state.careSearch? "Search Ingredient" : "Search Item"} onFocus={this.searchInFocus} onBlur={this.searchNotInFocus}/>
            </div>
        );
    }
}

function mapStateToProp(state) {
    return {
        state
    };
}

export default connect(mapStateToProp)(SearchBar);