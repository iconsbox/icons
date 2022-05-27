const a = `/**
* THIS IS AN AUTO GENERATED ICONBOX SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import { ReactElement, SVGProps } from "react";
import { useOptions, GlobalConfig } from '@iconbox/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./{PACKAGE_NAME}{COMP_NAME}.svg');
}

type Props = SVGProps<SVGSVGElement> & {
  size: number;
}

const {COMP_NAME} = ({ size, ...rest }: Props): ReactElement => {
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

module.exports = a;
