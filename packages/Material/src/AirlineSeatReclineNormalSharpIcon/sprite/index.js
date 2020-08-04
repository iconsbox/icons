/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./AirlineSeatReclineNormalSharpIcon.svg");
}

const AirlineSeatReclineNormalSharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="AirlineSeatReclineNormalSharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="AirlineSeatReclineNormalSharpIconHref"
        xlinkHref={`${importPrefix}#AirlineSeatReclineNormalSharpIcon`}
      />
    </svg>
  );
};

AirlineSeatReclineNormalSharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

AirlineSeatReclineNormalSharpIcon.defaultProps = {
  size: 1.5
};

export default AirlineSeatReclineNormalSharpIcon;
