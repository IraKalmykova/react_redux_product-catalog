import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import products from '../../products';
import './ProductDetailsPage.css';
import { addToBasket } from '../../redux/actions';

const ProductDetailsPage = ({
  match,
  addProductToBasket,
}) => {
  const { productId } = match.params;
  const product = products.filter(item => +item.id === +productId)[0];

  return (
    <div className="product-wrap">
      <div className="product__name">
        {product.title}
      </div>
      <div className="product__image">
        <img
          alt={product.title}
          src={`https://source.unsplash.com/250x250/?plate/${product.id}`}
          width="100%"
        />
      </div>
      <div className="product__info-wrap">
        <div className="product__info-description">{product.description}</div>
        <div className="product__info-price">
          $
          {product.price}
        </div>
        <button
          type="button"
          className="product__info-btn"
          onClick={() => (
            addProductToBasket(product.id, product.title, product.price)
          )}
        >
          buy
        </button>
      </div>
    </div>
  );
};

const mapDispatchToState = dispatch => ({
  addProductToBasket: (productId, productTitle, productPrice) => (
    dispatch(addToBasket(productId, productTitle, productPrice))
  ),
});

ProductDetailsPage.propTypes = {
  addProductToBasket: PropTypes.func.isRequired,
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(null, mapDispatchToState)(ProductDetailsPage);
