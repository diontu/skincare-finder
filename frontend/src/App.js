import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { fetch } from './redux/actions/products-actions';
import { connect } from 'react-redux';

import Loading from './components/Loading';

function App(props) {

  // having the empty array as the second param makes it only run once
  useEffect(() => {
    props.fetchProds();
  }, []);

  const products = useSelector(state => state.products); // takes the products from the state
  const isLoaded = useSelector(state => state.hasFetchedProducts); // gets the state of the 

  return !isLoaded ? <Loading/> : (
    <div className="App">
      dcc
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     state,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProds: () => {
      dispatch(fetch());
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
