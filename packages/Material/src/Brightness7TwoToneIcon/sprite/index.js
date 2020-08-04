/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./Brightness7TwoToneIcon.svg");
}

const Brightness7TwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Brightness7TwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="Brightness7TwoToneIconHref"
        xlinkHref={`${importPrefix}#Brightness7TwoToneIcon`}
      />
    </svg>
  );
};

Brightness7TwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Brightness7TwoToneIcon.defaultProps = {
  size: 1.5
};

export default Brightness7TwoToneIcon;
