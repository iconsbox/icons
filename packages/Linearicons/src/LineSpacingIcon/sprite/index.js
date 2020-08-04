/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./LineSpacingIcon.svg");
}

const LineSpacingIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="LineSpacingIcon"
      viewBox="0 0 20 20"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="LineSpacingIconHref"
        xlinkHref={`${importPrefix}#LineSpacingIcon`}
      />
    </svg>
  );
};

LineSpacingIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

LineSpacingIcon.defaultProps = {
  size: 1.5
};

export default LineSpacingIcon;
