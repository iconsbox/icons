/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./SyringeSolidIcon.svg");
}

const SyringeSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SyringeSolidIcon"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="SyringeSolidIconHref"
        xlinkHref={`${importPrefix}#SyringeSolidIcon`}
      />
    </svg>
  );
};

SyringeSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

SyringeSolidIcon.defaultProps = {
  size: 1.5
};

export default SyringeSolidIcon;
