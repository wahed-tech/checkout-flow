import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Svg, {Path, SvgProps} from 'react-native-svg';

export const IconClose = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" height={20} width={20}>
    <Path
      fill="#303030"
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
    />
  </Svg>
);
