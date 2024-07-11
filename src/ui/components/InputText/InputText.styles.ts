import {Animated, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {useAnimation} from 'react-native-animation-hooks';

import {Theme} from '../ThemeProvider';
import {getFont} from '../../utils/getFont';

type UseStylesProps = {
  isFocused: boolean;
  isFilled: boolean;
  isDisabled: boolean;
  isReadOnly: boolean;
  hasLabel: boolean;
};
export const useStyles = ({
  isFocused,
  isFilled,
  isDisabled,
  isReadOnly,
  hasLabel,
}: UseStylesProps) => {
  const theme = Theme;
  const isDisabledStyled = isDisabled || isReadOnly;
  const isFocusedOrFilled = isFilled || isFocused;
  const focusedOrFilledAnimation = useAnimation({
    type: 'timing',
    initialValue: 0,
    toValue: isFocusedOrFilled ? 1 : 0,
    duration: 150,
    useNativeDriver: false,
  });
  const focusedAnimation = useAnimation({
    type: 'timing',
    initialValue: 0,
    toValue: isFocused ? 1 : 0,
    duration: 150,
    useNativeDriver: false,
  });

  const hasLabelOrNotFilledNorFocused = hasLabel || (!isFilled && !isFocused);

  const font = getFont({
    languageCode: theme.languageCode,
    isRtl: theme.direction === 'rtl',
  });

  const backgroundColors = {
    focused: theme.colors.lightGray8,
    filled: theme.colors.lightGray6,
    disabled: theme.colors.lightGray7,
  };

  return {
    wrapper: {} as StyleProp<ViewStyle>,
    prefixIconContainer: {
      marginEnd: theme.spacing.xxs,
    },
    container: {
      alignItems: 'center',
      borderRadius: 12,
      backgroundColor: focusedAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          isFocused
            ? backgroundColors.focused
            : isDisabledStyled
            ? backgroundColors.disabled
            : backgroundColors.filled,
          backgroundColors.focused,
        ],
      }),
      overflow: 'hidden',
      flexDirection: 'row',
      paddingHorizontal: theme.spacing.s,
      height: 60,
    } as Animated.WithAnimatedObject<ViewStyle>,
    label: {
      position: 'absolute',
      top: focusedOrFilledAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 8],
      }),
      fontSize: focusedOrFilledAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      lineHeight: focusedOrFilledAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [24, 16],
      }),
      color: isDisabledStyled
        ? theme.colors.lightGray4
        : theme.colors.lightGray3,
      fontFamily: font.regular,
      flex: 1,
      width: '100%',
      textAlign: 'left',
    } as Animated.WithAnimatedObject<TextStyle>,
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      position: 'relative',
      flexShrink: 1,
      overflow: 'hidden',
    } as Animated.WithAnimatedObject<TextStyle>,
    input: {
      paddingTop: hasLabelOrNotFilledNorFocused
        ? theme.spacing.m
        : theme.spacing.xxs,
      paddingBottom: theme.spacing.xxxs,
      backgroundColor: 'transparent',
      paddingHorizontal: 0,
      fontSize: 20,
      lineHeight: 24,
      flexShrink: 1,
      flexGrow: 1,
      color: isDisabledStyled ? theme.colors.lightGray4 : theme.colors.darkGray,
      fontFamily: font.regular,
      height: 60,
    },
    iconContainer: {
      flexDirection: 'row',
      marginStart: theme.spacing.xxxs,
      flexShrink: 0,
    } as StyleProp<ViewStyle>,
  };
};
