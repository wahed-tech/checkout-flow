import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Svg, {SvgProps, Path} from 'react-native-svg';

export const IconAbout = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#E45F60"
      d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20Z"
    />
  </Svg>
);
