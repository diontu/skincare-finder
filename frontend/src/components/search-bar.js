import React, { createRef } from 'react';
import '../styles.css';
import { connect } from 'react-redux';
import { toggleSearch, updateSearchValue } from '../redux/actions/products-actions';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.state,
            searchFocused: false,
            inputRef: createRef()
        };
        this.searchInFocus = this.searchInFocus.bind(this);
        this.searchNotInFocus = this.searchNotInFocus.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
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

    _handleKeyDown(event) {
        if (event.key === 'Enter') {
            // begin searching using the input from the search bar
            this.props.updateSearch(event.target.value);
            this.state.inputRef.current.blur()
            if (this.props.careSearch) {
                //perform a care search
                // perform an action to make an api call on all the targetURL to return the search Results
            } 
            else {
                //perform a reg search
            }
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className={this.state.searchFocused? "search-bar-focused" : "search-bar"}>
                <input className="search-bar-input" 
                    ref={this.state.inputRef}
                    type="text" 
                    placeholder={this.props.state.careSearch? "Search Ingredient" : "Search Item"} 
                    onFocus={this.searchInFocus} 
                    onBlur={this.searchNotInFocus}
                    onKeyDown={this._handleKeyDown}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateSearch: (searchVal) => {
            dispatch(updateSearchValue(searchVal));
        } 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);