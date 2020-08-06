import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { fetchInitial, findAllProductsWithIngredients } from './redux/actions/products-actions';
import { connect } from 'react-redux';

import Loading from './components/Loading';

import TitleBar from './components/title-bar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './routes/home/Home';
import Product from './routes/product/Product';
import Contact from './routes/contact/Contact';
import { matchSearchValuesWithIngredients } from './models/services/services';

function App(props) {

  // having the empty array as the second param makes it only run once
  useEffect(() => {
    props.fetchProdsInitial();
    props.fetchIngredients();
  }, []);

  const isLoadedProducts = useSelector(state => state.hasFetchedProducts); // gets the state of the loader
  const isLoadingIngredients = useSelector(state => state.fetchingIngredients);

  return !isLoadedProducts || isLoadingIngredients? <Loading/> : (
    <div>
      <Router>
        <TitleBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/product/:id" component={Product}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
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
    fetchProdsInitial: () => {
      dispatch(fetchInitial());
    },
    fetchIngredients: () => {
      dispatch(findAllProductsWithIngredients());
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
