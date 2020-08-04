import React from "react";
import PropTypes from "prop-types";

import ToolboxContext from "./context";
import GlobalConfig from "./config";

const Provider = ({ options, children }) => {
  GlobalConfig.options = { ...GlobalConfig.options, ...options };
  return (
    <ToolboxContext.Provider value={GlobalConfig}>
      {children}
    </ToolboxContext.Provider>
  );
};

Provider.propTypes = {
  options: PropTypes.shape({
    SSR: PropTypes.bool,
    importSpriteSVG: PropTypes.bool,
    useSpriteFile: PropTypes.bool,
    publicPath: PropTypes.string,
    spriteSvgName: PropTypes.string
  }),
  children: PropTypes.node
};

Provider.defaultProps = {
  options: {},
};

export default Provider;
