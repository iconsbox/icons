/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./HomeSolidIcon.svg");
}

const HomeSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="HomeSolidIcon"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="HomeSolidIconHref"
        xlinkHref={`${importPrefix}#HomeSolidIcon`}
      />
    </svg>
  );
};

HomeSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

HomeSolidIcon.defaultProps = {
  size: 1.5
};

export default HomeSolidIcon;
