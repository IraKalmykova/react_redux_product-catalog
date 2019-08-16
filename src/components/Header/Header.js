import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = ({ quantityProducts }) => (
  <header className="header">
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className="nav__item"
            activeClassName="nav__item--active"
            to="/"
            exact
          >
            Product catalog
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__item"
            activeClassName="nav__item--active"
            to="/basket"
          >
            Basket&nbsp;
            {quantityProducts > 0 && `(${quantityProducts})`}
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

const mapStateToProps = state => ({
  quantityProducts: Object.keys(state.basketItems)
    .map(key => (
      state.basketItems[key].count
    ))
    .reduce((sum, currentValue) => (
      sum + currentValue
    ), 0),
});

Header.propTypes = {
  quantityProducts: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
