/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./SettingsInputSvideoSharpIcon.svg");
}

const SettingsInputSvideoSharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SettingsInputSvideoSharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="SettingsInputSvideoSharpIconHref"
        xlinkHref={`${importPrefix}#SettingsInputSvideoSharpIcon`}
      />
    </svg>
  );
};

SettingsInputSvideoSharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

SettingsInputSvideoSharpIcon.defaultProps = {
  size: 1.5
};

export default SettingsInputSvideoSharpIcon;
