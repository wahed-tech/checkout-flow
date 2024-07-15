import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Svg, {Path, SvgProps} from 'react-native-svg';

export const IconCheckbox = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 20 20" height={20} width={20}>
    <Path
      fill="#689E9F"
      d="M14.34 0C17.73 0 20 2.38 20 5.92v8.17c0 3.53-2.27 5.91-5.66 5.91H5.67C2.28 20 0 17.62 0 14.09V5.92C0 2.38 2.28 0 5.67 0h8.67Zm-.16 7a.881.881 0 0 0-1.24 0l-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25l4.75-4.75c.34-.34.34-.89 0-1.24Z"
    />
  </Svg>
);
