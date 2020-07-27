import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { fetch } from './redux/actions/products-actions';
import { connect } from 'react-redux';

import Loading from './components/Loading';

const useFetch = (fetchActionCreator) => {
  useEffect(() => {
    fetchActionCreator();
  }, []);
};

const mapDispatch = {
  fetch
};

function App(props) {

  useFetch(props.fetch);

  const products = useSelector(state => state.products); // takes the products from the state
  const isLoaded = useSelector(state => state.hasFetchedProducts); // gets the state of the 

  return !isLoaded ? <Loading/> : (
    <div className="App">
      dcc
    </div>
  );
}

export default connect(null, mapDispatch)(App);


// for a class component

// const mapStateToProps = (state) => {
//   return {
//     state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProds: () => {
//       dispatch(fetchProducts());
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
