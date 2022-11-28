import { createContext } from 'react';

const ToolboxContext = createContext({
  options: {
    SSR: false,
    importSpriteSVG: false,
    useSpriteFile: false,
    publicPath: '',
    spriteSvgName: '',
  }
});

export default ToolboxContext;
