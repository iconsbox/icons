/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./SignalWifi0BarRoundedIcon.svg");
}

const SignalWifi0BarRoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SignalWifi0BarRoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="SignalWifi0BarRoundedIconHref"
        xlinkHref={`${importPrefix}#SignalWifi0BarRoundedIcon`}
      />
    </svg>
  );
};

SignalWifi0BarRoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

SignalWifi0BarRoundedIcon.defaultProps = {
  size: 1.5
};

export default SignalWifi0BarRoundedIcon;
