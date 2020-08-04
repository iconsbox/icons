/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./Filter1SharpIcon.svg");
}

const Filter1SharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Filter1SharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="Filter1SharpIconHref"
        xlinkHref={`${importPrefix}#Filter1SharpIcon`}
      />
    </svg>
  );
};

Filter1SharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Filter1SharpIcon.defaultProps = {
  size: 1.5
};

export default Filter1SharpIcon;
