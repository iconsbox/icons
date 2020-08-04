/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./DriversLicenseIcon.svg");
}

const DriversLicenseIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="DriversLicenseIcon"
      viewBox="0 0 2048 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="DriversLicenseIconHref"
        xlinkHref={`${importPrefix}#DriversLicenseIcon`}
      />
    </svg>
  );
};

DriversLicenseIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

DriversLicenseIcon.defaultProps = {
  size: 1.5
};

export default DriversLicenseIcon;
