import React from "react";

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

Provider.defaultProps = {
  options: {},
};

export default Provider;
