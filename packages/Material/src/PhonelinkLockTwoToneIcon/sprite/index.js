/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./PhonelinkLockTwoToneIcon.svg");
}

const PhonelinkLockTwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PhonelinkLockTwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="PhonelinkLockTwoToneIconHref"
        xlinkHref={`${importPrefix}#PhonelinkLockTwoToneIcon`}
      />
    </svg>
  );
};

PhonelinkLockTwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

PhonelinkLockTwoToneIcon.defaultProps = {
  size: 1.5
};

export default PhonelinkLockTwoToneIcon;
