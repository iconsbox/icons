/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./Hourglass1Icon.svg");
}

const Hourglass1Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Hourglass1Icon"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="Hourglass1IconHref"
        xlinkHref={`${importPrefix}#Hourglass1Icon`}
      />
    </svg>
  );
};

Hourglass1Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Hourglass1Icon.defaultProps = {
  size: 1.5
};

export default Hourglass1Icon;
