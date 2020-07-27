/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ErrorIcon = ({ className, size }) => (
  <svg
    data-testid="ErrorIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
  </svg>
);

ErrorIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ErrorIcon.defaultProps = {
  size: 1.5,
};

export default ErrorIcon;
