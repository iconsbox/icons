/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./BrandEtsyIcon.svg");
}

const BrandEtsyIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BrandEtsyIcon"
      viewBox="0 0 384 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="BrandEtsyIconHref"
        xlinkHref={`${importPrefix}#BrandEtsyIcon`}
      />
    </svg>
  );
};

BrandEtsyIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

BrandEtsyIcon.defaultProps = {
  size: 1.5
};

export default BrandEtsyIcon;
