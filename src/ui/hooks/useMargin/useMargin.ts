import {Platform} from 'react-native';

import {SpacingWithNegative, UseMarginProps} from './types';
import {Theme} from '../../components/ThemeProvider';

/**
 * This hook returns the margin styles for the component. Those styles include:
 * - `margin` - Margin around the component.
 * - `marginStart` - Margin on the left side of the component.
 * - `marginEnd` - Margin on the right side of the component.
 * - `marginTop` - Margin on the top of the component.
 * - `marginBottom` - Margin on the bottom of the component.
 * - `marginVertical` - Margin on the top and bottom of the component.
 * - `marginHorizontal` - Margin on the left and right of the component.
 */
export const useMargin = ({
  margin,
  marginBottom,
  marginStart,
  marginEnd,
  marginTop,
  marginHorizontal,
  marginVertical,
}: UseMarginProps) => {
  const theme = Theme;

  const isWeb = Platform.OS === 'web';

  const toSpacing = (spacing: SpacingWithNegative) => {
    if (spacing.includes('-')) {
      return -theme.spacing[
        spacing.slice(1, spacing.length) as keyof typeof theme.spacing
      ];
    }

    return theme.spacing[spacing as keyof typeof theme.spacing];
  };

  return [
    !!margin && {
      margin: toSpacing(margin),
    },
    !!marginVertical && {
      marginTop: toSpacing(marginVertical),
      marginBottom: toSpacing(marginVertical),
    },
    !!marginHorizontal && {
      marginLeft: toSpacing(marginHorizontal),
      marginRight: toSpacing(marginHorizontal),
    },
    !!marginBottom && {
      marginBottom: toSpacing(marginBottom),
    },
    !!marginTop && {
      marginTop: toSpacing(marginTop),
    },
    !!marginStart &&
      (isWeb
        ? {
            marginInlineStart: toSpacing(marginStart),
          }
        : {
            marginLeft: toSpacing(marginStart),
          }),
    !!marginEnd &&
      (isWeb
        ? {
            marginInlineEnd: toSpacing(marginEnd),
          }
        : {
            marginRight: toSpacing(marginEnd),
          }),
  ];
};
