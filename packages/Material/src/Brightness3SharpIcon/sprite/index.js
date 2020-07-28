/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./Brightness3SharpIcon.svg");
}

const Brightness3SharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Brightness3SharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="Brightness3SharpIconHref"
        xlinkHref={`${importPrefix}#Brightness3SharpIcon`}
      />
    </svg>
  );
};

Brightness3SharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Brightness3SharpIcon.defaultProps = {
  size: 1.5
};

export default Brightness3SharpIcon;
