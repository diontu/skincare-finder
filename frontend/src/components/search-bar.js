import React, { createRef } from 'react';
import '../styles.css';
import { connect } from 'react-redux';
import { toggleSearch, updateSearchValue } from '../redux/actions/products-actions';
import { matchSearchValuesWithProductName, matchSearchValuesWithIngredients } from '../models/services/services';

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
        this._handleKeyDownOrButtonPress = this._handleKeyDownOrButtonPress.bind(this);
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

    _handleKeyDownOrButtonPress(event) {
        if (event.key === 'Enter') {

            //should parse the input so that One could input multiple ingredients and filter for them

            // begin searching using the input from the search bar
            this.props.updateSearch([event.target.value]);
            this.state.inputRef.current.blur();

            //force rerender
            if (this.props.state.careSearch) {
                //perform a care search
                // perform an action to make an api call on all the targetURL to return the search Results
                this.props.matchWithProductIngredients();
            } 
            else {
                //perform a reg search
                this.props.matchWithProductName();
            }
        }
    }

    render() {
        console.log(this.props.state);
        return (
            <div className={this.state.searchFocused? "search-bar-focused" : "search-bar"}>
                <input className="search-bar-input" 
                    ref={this.state.inputRef}
                    type="text" 
                    placeholder={this.props.state.careSearch? "Search Ingredient" : "Search Item"} 
                    onFocus={this.searchInFocus} 
                    onBlur={this.searchNotInFocus}
                    onKeyDown={this._handleKeyDownOrButtonPress}/>
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
        },
        matchWithProductName: () => {
            dispatch(matchSearchValuesWithProductName());
        },
        matchWithProductIngredients: () => {
            dispatch(matchSearchValuesWithIngredients());
        }  
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);