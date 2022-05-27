import React from "react";

import ToolboxContext from "./context";
import GlobalConfig from "./config";

type Props = {
  options: {
    SSR: boolean;
    importSpriteSVG: boolean;
    useSpriteFile: boolean;
    publicPath: string;
    spriteSvgName: string;
  },
  children: React.ReactNode;
}

const Provider = ({ options, children }: Props) => {
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
