/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./ExpandOutlineIcon.svg");
}

const ExpandOutlineIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ExpandOutlineIcon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="ExpandOutlineIconHref"
        xlinkHref={`${importPrefix}#ExpandOutlineIcon`}
      />
    </svg>
  );
};

ExpandOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

ExpandOutlineIcon.defaultProps = {
  size: 1.5
};

export default ExpandOutlineIcon;
