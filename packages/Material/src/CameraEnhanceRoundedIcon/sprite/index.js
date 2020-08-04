/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./CameraEnhanceRoundedIcon.svg");
}

const CameraEnhanceRoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CameraEnhanceRoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="CameraEnhanceRoundedIconHref"
        xlinkHref={`${importPrefix}#CameraEnhanceRoundedIcon`}
      />
    </svg>
  );
};

CameraEnhanceRoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

CameraEnhanceRoundedIcon.defaultProps = {
  size: 1.5
};

export default CameraEnhanceRoundedIcon;
