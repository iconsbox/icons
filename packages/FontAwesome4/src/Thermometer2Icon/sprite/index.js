/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Thermometer2Icon.svg');
}

const Thermometer2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Thermometer2Icon"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Thermometer2IconHref"
        xlinkHref={`${importPrefix}#Thermometer2Icon`}
      />
    </svg>
  );
};

Thermometer2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Thermometer2Icon.defaultProps = {
  size: 1.5,
};

export default Thermometer2Icon;
