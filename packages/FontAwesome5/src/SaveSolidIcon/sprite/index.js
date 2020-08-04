/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./SaveSolidIcon.svg");
}

const SaveSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SaveSolidIcon"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="SaveSolidIconHref"
        xlinkHref={`${importPrefix}#SaveSolidIcon`}
      />
    </svg>
  );
};

SaveSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

SaveSolidIcon.defaultProps = {
  size: 1.5
};

export default SaveSolidIcon;
