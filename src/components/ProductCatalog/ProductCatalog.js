import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToBasket } from '../../redux/actions';
import products from '../../products';
import './ProductCatalog.css';

const ProductCatalog = ({ addProductToBasket }) => (
  <main className="products">
    <h1 className="products__title">Product Catalog</h1>
    {products.map(product => (
      <div className="product" key={product.id}>
        <div className="product__img">
          <NavLink to={`/${product.id}`}>
            <img
              alt={product.title}
              src={`https://source.unsplash.com/250x250/?plate/${product.id}`}
              width="100%"
            />
          </NavLink>
        </div>
        <div className="product__title">
          <NavLink
            to={`/${product.id}`}
            className="product__title-link"
          >
            {product.title}
          </NavLink>
        </div>
        <div className="product__bottom-info">
          <div className="product__price">
            $
            {product.price}
          </div>
          <button
            type="button"
            className="product__btn"
            onClick={() => (
              addProductToBasket(product.id, product.title, product.price)
            )}
          >
            Buy
          </button>
        </div>
      </div>
    ))}
  </main>
);

const mapDispatchToState = dispatch => ({
  addProductToBasket: (productId, productTitle, productPrice) => (
    dispatch(addToBasket(productId, productTitle, productPrice))
  ),
});

ProductCatalog.propTypes = {
  addProductToBasket: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToState)(ProductCatalog);
