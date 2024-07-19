import React, {FC, PropsWithChildren} from 'react';
import {Text as BaseText, StyleProp, TextStyle} from 'react-native';

import {useMargin, useTestID} from '../../hooks';
import {Theme} from '../ThemeProvider';
import {TextProps} from './props';
import {useStyles} from './Text.styles';

export const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  color,
  variant = 'body2',
  textAlign,
  ellipsizeMode,
  numberOfLines = 1,
  onPress,
  testID,
  ...restProps
}) => {
  const {getTestID} = useTestID({testID});
  const theme = Theme;
  const margin = useMargin(restProps);

  const styles = useStyles();
  const componentStyles = [
    styles.base,
    styles.variants[variant],
    !!textAlign && styles.textAlign[textAlign],
    !!color && {
      color: theme.colors[color],
    },
    ...margin,
  ] as StyleProp<TextStyle>;

  return (
    <BaseText
      ellipsizeMode={ellipsizeMode}
      numberOfLines={ellipsizeMode ? numberOfLines : undefined}
      accessibilityRole="text"
      style={componentStyles}
      onPress={onPress}
      testID={getTestID('text')}
      allowFontScaling={false}>
      {children}
    </BaseText>
  );
};
