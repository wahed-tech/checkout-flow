import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Svg, {Path, SvgProps} from 'react-native-svg';

export const IconCheck = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#303030"
      d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
    />
  </Svg>
);
