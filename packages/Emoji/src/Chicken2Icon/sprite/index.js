/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./Chicken2Icon.svg");
}

const Chicken2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Chicken2Icon"
      viewBox="0 0 48 48"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="Chicken2IconHref"
        xlinkHref={`${importPrefix}#Chicken2Icon`}
      />
    </svg>
  );
};

Chicken2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Chicken2Icon.defaultProps = {
  size: 1.5
};

export default Chicken2Icon;
