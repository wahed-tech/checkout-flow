import {StyleSheet} from 'react-native';

import {toModalStyles} from './Modal.utils';
import {ModalProps} from './props';
import {Theme} from '../ThemeProvider';
type UseStylesProps = {
  variant: ModalProps['variant'];
  isFooterVisible: boolean;
  isCloseButtonVisible: boolean;
};

export const useStyles = ({
  variant,
  isFooterVisible,
  isCloseButtonVisible,
}: UseStylesProps) => {
  const theme = Theme;
  const wrapperProps = toModalStyles(variant);

  return StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: 'flex-end',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.overlay,
    },
    wrapper: {
      position: 'absolute',
      width: '100%',
      bottom: '-100%',
      left: 0,
      flexDirection: 'column',
      ...wrapperProps,
    },
    body: {
      paddingTop: isCloseButtonVisible ? 0 : theme.spacing.xxl,
      paddingBottom: isFooterVisible ? 0 : theme.spacing.xxl,
    },
    illustration: {
      alignSelf: 'center',
      marginTop: theme.spacing.m,
      color: theme.colors.darkGray,
    },
    footer: {
      marginTop: theme.spacing.xxl,
    },
    closeButton:
      variant === 'overlay'
        ? {
            alignSelf: 'flex-start',
            paddingTop: 59,
            paddingStart: 21,
          }
        : {
            alignSelf: 'flex-end',
          },
  });
};
