/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./BrandNs8Icon.svg");
}

const BrandNs8Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BrandNs8Icon"
      viewBox="0 0 640 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="BrandNs8IconHref"
        xlinkHref={`${importPrefix}#BrandNs8Icon`}
      />
    </svg>
  );
};

BrandNs8Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

BrandNs8Icon.defaultProps = {
  size: 1.5
};

export default BrandNs8Icon;
