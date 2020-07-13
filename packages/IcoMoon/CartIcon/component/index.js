/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CartIcon = ({ className, size }) => (
  <svg
    data-testid="CartIcon"
    viewBox="0 0 16 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fill="#000000"
      d="M6 14.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
    ></path>
    <path
      fill="#000000"
      d="M16 14.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"
    ></path>
    <path
      fill="#000000"
      d="M16 8v-6h-12c0-0.552-0.448-1-1-1h-3v1h2l0.751 6.438c-0.458 0.367-0.751 0.93-0.751 1.562 0 1.105 0.895 2 2 2h12v-1h-12c-0.552 0-1-0.448-1-1 0-0.003 0-0.007 0-0.010l13-1.99z"
    ></path>
  </svg>
);

CartIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CartIcon.defaultProps = {
  size: 1.5,
};

export default CartIcon;
