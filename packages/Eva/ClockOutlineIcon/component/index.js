/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ClockOutlineIcon = ({ className, size }) => (
  <svg
    data-testid="ClockOutlineIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <g>
      <g>
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        ></rect>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
        <path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z"></path>
      </g>
    </g>
  </svg>
);

ClockOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ClockOutlineIcon.defaultProps = {
  size: 1.5,
};

export default ClockOutlineIcon;
