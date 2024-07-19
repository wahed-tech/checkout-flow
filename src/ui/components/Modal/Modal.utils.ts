import {ViewStyle} from 'react-native';

import {ModalProps} from './props';

/**
 * Transforms modal variant to modal container styles
 **/
export const toModalStyles = (variant: ModalProps['variant']): ViewStyle => {
  if (variant === 'full-height') {
    return {
      height: '100%',
      paddingTop: 44,
      overflow: 'hidden',
    };
  }
  if (variant === 'overlay') {
    return {
      height: '100%',
      paddingTop: 0,
      overflow: 'hidden',
    };
  }

  return {};
};
