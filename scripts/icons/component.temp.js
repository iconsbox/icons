const a = `/**
* THIS IS AN AUTO GENERATED ICONBOX FILE, CHANGES WILL NOT APPLY
*/
import React, { ReactElement, SVGProps } from "react";
type Props = SVGProps<SVGSVGElement> & {
  size: number;
}

const COMP_NAME = ({ size, ...rest }: Props): ReactElement =>
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

module.exports = a;
