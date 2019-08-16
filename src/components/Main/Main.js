import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsPage from '../ProductsPage/ProductsPage';
import Basket from '../Basket/Basket';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage';

const Main = () => (
  <Switch>
    <Route path="/" component={ProductsPage} exact />
    <Route path="/basket" exact component={Basket} />
    <Route
      path="/:productId"
      exact
      component={ProductDetailsPage}
    />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Main;
