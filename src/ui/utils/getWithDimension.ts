import {Platform} from 'react-native';

export const getWithDimension = (value: number) => {
  const isMobile = Platform.OS !== 'web';

  if (isMobile) {
    return value;
  }

  return value + 'px';
};
