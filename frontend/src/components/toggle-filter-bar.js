import React from 'react';
import "./../styles.css";
import {connect, useSelector} from 'react-redux';
import {toggleSearch} from './../redux/actions/products-actions';


function ToggleFilterBar(props) {

    const normalSearch = useSelector((state) => state.normalSearch);
    const careSearch = useSelector((state) => state.careSearch);

    function toggleTheSearch(event) {
        props.toggleSearch();
    }

    return(
        <div className="center">
            <label className="switch">
                <input type="checkbox" onClick={toggleTheSearch}/>
                <span className="slider round"></span>
            </label>
            <div>Ingredient Search</div>
        </div>
    );
}

function mapDispatchToProp(dispatch) {
    return({
        toggleSearch: () => {
            dispatch(toggleSearch());
        }
    });
}

export default connect(null, mapDispatchToProp)(ToggleFilterBar);