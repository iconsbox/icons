import { createContext } from 'react';

const ToolboxContext = createContext<{
  options: {
    SSR: boolean;
    importSpriteSVG: boolean;
    useSpriteFile: boolean;
    publicPath: string;
    spriteSvgName: string;
  }
}>({
  options: {
    SSR: false,
    importSpriteSVG: false,
    useSpriteFile: false,
    publicPath: '',
    spriteSvgName: '',
  }
});

export default ToolboxContext;
