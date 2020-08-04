/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./CheckSquareSolidIcon.svg");
}

const CheckSquareSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CheckSquareSolidIcon"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="CheckSquareSolidIconHref"
        xlinkHref={`${importPrefix}#CheckSquareSolidIcon`}
      />
    </svg>
  );
};

CheckSquareSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

CheckSquareSolidIcon.defaultProps = {
  size: 1.5
};

export default CheckSquareSolidIcon;
