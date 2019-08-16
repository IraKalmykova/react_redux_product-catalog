import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  increaseBasketItem,
  decreaseBasketItem,
  removeBasketItem,
} from '../../redux/actions';
import './Basket.css';

const Basket = ({
  products,
  increaseItem,
  decreaseItem,
  removeItem,
  productsSubtotal,
}) => (
  <main className="basket">
    <h1 className="basket__title">Basket</h1>
    {Object.keys(products).map(key => (
      <div
        key={key}
        className="basket__product"
      >
        <div className="basket__product-name">{products[key].title}</div>
        <button
          type="button"
          className="basket__product-btn"
          onClick={() => increaseItem(key, products[key].price)}
        >
          +
        </button>
        <div className="basket__product-count">{products[key].count}</div>
        <button
          type="button"
          className="basket__product-btn"
          onClick={() => decreaseItem(key, products[key].price)}
        >
          -
        </button>
        <div className="basket__product-amount">
          $
          {products[key].amount}
        </div>
        <button
          type="button"
          className="basket__product-btn-delete"
          onClick={() => removeItem(key, products[key].count)}
        >
          x
        </button>
      </div>
    ))}
    <div className="basket__products-subtotal">
      Subtotal: $
      {productsSubtotal}
    </div>
  </main>
);

const mapStateToProps = state => ({
  products: state.basketItems,
  productsSubtotal: Object.keys(state.basketItems)
    .map(key => (
      state.basketItems[key].amount
    ))
    .reduce((sum, currentValue) => (
      sum + currentValue
    ), 0),

});

const mapDispatchToProps = dispatch => ({
  increaseItem: (productId, productPrice) => (
    dispatch(increaseBasketItem(productId, productPrice))
  ),
  decreaseItem: (productId, productPrice) => (
    dispatch(decreaseBasketItem(productId, productPrice))
  ),
  removeItem: (productId, count) => (
    dispatch(removeBasketItem(productId, count))
  ),
});

Basket.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  productsSubtotal: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
