const esm = `/**
* THIS IS AN AUTO GENERATED ICONBOX FILE, CHANGES WILL NOT APPLY
*/
import * as React from "react";
const COMP_NAME = ({ size, ...rest }) =>
  <svg
    data-testid="COMP_NAME"
    viewBox="VIEW_BOX"
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="FILL_VALUE"
    focusable="false"
    {...rest}
  >
    SVG_BODY
  </svg>;

COMP_NAME.defaultProps = {
  size: 1.5,
};

export default COMP_NAME;
`;

const spriteEsm = `/**
* THIS IS AN AUTO GENERATED ICONBOX SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import { useOptions, GlobalConfig } from '@iconbox/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./{PACKAGE_NAME}{COMP_NAME}.svg');
}

const {COMP_NAME} = ({ size, ...rest }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? options.spriteSvgName : '';
  if(options.useSpriteFile && options.publicPath !== '/') {
    importPrefix = '/' + options.publicPath + importPrefix;
  }

  const link = importPrefix + '#{PACKAGE_NAME}{COMP_NAME}';

  return <svg
    data-testid="{COMP_NAME}"
    viewBox="{VIEW_BOX}"
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="{FILL_VALUE}"
    focusable="false"
    {...rest}
  >
     <use data-testid="{COMP_NAME}Href" href={link} xlinkHref={link} />
  </svg>;
};

{COMP_NAME}.defaultProps = {
  size: 1.5,
};

export default {COMP_NAME};
`;

module.exports = {
  esm,
  spriteEsm
};
