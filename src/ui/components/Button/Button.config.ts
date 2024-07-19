import {Theme} from '../ThemeProvider';
import {BtnConfiguration, ButtonProps} from './types';

export const useConfiguration = (
  variant: ButtonProps['variant'],
  size: ButtonProps['size'],
  hasIcon?: boolean,
): BtnConfiguration => {
  const theme = Theme;
  if (variant === 'minimal') {
    return size === 'small'
      ? {
          borderRadius: 24,
          iconSize: 'xxxxs',
          fontSize: 14,
          verticalPadding: 2,
          horizontalPadding: theme.spacing.xxs,
          loaderSize: 12,
          borderColor: undefined,
          borderWidth: 0,
        }
      : {
          borderRadius: 32,
          iconSize: 'xxs',
          fontSize: 18,
          verticalPadding: 5,
          horizontalPadding: theme.spacing.xs,
          loaderSize: 16,
          borderColor: undefined,
          borderWidth: 0,
        };
  }

  if (variant === 'quinary') {
    return {
      lineHeight: 24,
      borderRadius: size === 'large' ? 48 : 40,
      iconSize: 'xxs',
      fontSize: 18,
      verticalPadding: size === 'large' ? 12 : hasIcon ? 8 : 10,
      horizontalPadding: size === 'large' ? theme.spacing.m : theme.spacing.xs,
      loaderSize: 24,
      borderColor: theme.colors.lightGray5,
      borderWidth: 1,
    };
  }

  return {
    lineHeight: size === 'small' ? 22 : 24,
    borderRadius: size === 'large' ? 48 : 40,
    iconSize: size === 'small' ? 'xxxs' : 'xxs',
    fontSize: size === 'small' ? 16 : 18,
    verticalPadding:
      size === 'small' ? (hasIcon ? 8 : 10) : size === 'large' ? 12 : 8,
    horizontalPadding: size === 'large' ? theme.spacing.m : theme.spacing.xs,
    loaderSize: size === 'small' ? 18 : 24,
    borderColor: undefined,
    borderWidth: 0,
  };
};
