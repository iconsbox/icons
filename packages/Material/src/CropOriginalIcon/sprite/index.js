/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./CropOriginalIcon.svg");
}

const CropOriginalIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CropOriginalIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="CropOriginalIconHref"
        xlinkHref={`${importPrefix}#CropOriginalIcon`}
      />
    </svg>
  );
};

CropOriginalIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

CropOriginalIcon.defaultProps = {
  size: 1.5
};

export default CropOriginalIcon;
