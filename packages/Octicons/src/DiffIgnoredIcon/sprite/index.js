/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./DiffIgnoredIcon.svg");
}

const DiffIgnoredIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="DiffIgnoredIcon"
      viewBox="0 0 14 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="DiffIgnoredIconHref"
        xlinkHref={`${importPrefix}#DiffIgnoredIcon`}
      />
    </svg>
  );
};

DiffIgnoredIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

DiffIgnoredIcon.defaultProps = {
  size: 1.5
};

export default DiffIgnoredIcon;
