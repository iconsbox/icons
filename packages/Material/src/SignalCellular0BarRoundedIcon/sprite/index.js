/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./SignalCellular0BarRoundedIcon.svg");
}

const SignalCellular0BarRoundedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SignalCellular0BarRoundedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="SignalCellular0BarRoundedIconHref"
        xlinkHref={`${importPrefix}#SignalCellular0BarRoundedIcon`}
      />
    </svg>
  );
};

SignalCellular0BarRoundedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

SignalCellular0BarRoundedIcon.defaultProps = {
  size: 1.5
};

export default SignalCellular0BarRoundedIcon;
