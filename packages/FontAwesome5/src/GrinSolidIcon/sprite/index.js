/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./GrinSolidIcon.svg");
}

const GrinSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="GrinSolidIcon"
      viewBox="0 0 496 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="GrinSolidIconHref"
        xlinkHref={`${importPrefix}#GrinSolidIcon`}
      />
    </svg>
  );
};

GrinSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

GrinSolidIcon.defaultProps = {
  size: 1.5
};

export default GrinSolidIcon;
