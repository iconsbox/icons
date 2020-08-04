/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@iconbox/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./QuoteLeftIcon.svg");
}

const QuoteLeftIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="QuoteLeftIcon"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="QuoteLeftIconHref"
        xlinkHref={`${importPrefix}#QuoteLeftIcon`}
      />
    </svg>
  );
};

QuoteLeftIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

QuoteLeftIcon.defaultProps = {
  size: 1.5
};

export default QuoteLeftIcon;
