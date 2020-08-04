/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./PlaySolidIcon.svg");
}

const PlaySolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PlaySolidIcon"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="PlaySolidIconHref"
        xlinkHref={`${importPrefix}#PlaySolidIcon`}
      />
    </svg>
  );
};

PlaySolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

PlaySolidIcon.defaultProps = {
  size: 1.5
};

export default PlaySolidIcon;
