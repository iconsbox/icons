/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./CapsulesSolidIcon.svg");
}

const CapsulesSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CapsulesSolidIcon"
      viewBox="0 0 576 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="CapsulesSolidIconHref"
        xlinkHref={`${importPrefix}#CapsulesSolidIcon`}
      />
    </svg>
  );
};

CapsulesSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

CapsulesSolidIcon.defaultProps = {
  size: 1.5
};

export default CapsulesSolidIcon;
