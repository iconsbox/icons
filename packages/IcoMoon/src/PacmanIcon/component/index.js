/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PacmanIcon = ({ className, size }) => (
  <svg
    data-testid="PacmanIcon"
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
      d="M15.074 2.794c-1.467-1.71-3.644-2.794-6.074-2.794-4.418 0-8 3.582-8 8s3.582 8 8 8c2.43 0 4.607-1.084 6.074-2.794l-5.074-5.206 5.074-5.206zM11 1.884c0.616 0 1.116 0.499 1.116 1.116s-0.499 1.116-1.116 1.116-1.116-0.499-1.116-1.116c0-0.616 0.499-1.116 1.116-1.116z"
    ></path>
  </svg>
);

PacmanIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PacmanIcon.defaultProps = {
  size: 1.5,
};

export default PacmanIcon;
