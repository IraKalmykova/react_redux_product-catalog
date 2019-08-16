import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductCatalog from '../ProductCatalog/ProductCatalog';
import './ProductsPage.css';

const ProductsPage = () => (
  <>
    <Switch>
      <Route path="/" exact component={ProductCatalog} />
    </Switch>
  </>
);

export default ProductsPage;
