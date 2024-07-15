import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Svg, {Path, SvgProps} from 'react-native-svg';

export const IconCheckboxOutline = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 20 20" {...props}>
    <Path
      stroke="#303030"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14.334.75H5.665C2.645.75.75 2.89.75 5.916v8.168c0 3.027 1.885 5.166 4.915 5.166h8.668c3.031 0 4.917-2.139 4.917-5.166V5.916C19.25 2.89 17.364.75 14.334.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
