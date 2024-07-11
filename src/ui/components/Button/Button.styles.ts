import {Animated, ViewStyle} from 'react-native';
import {useAnimation} from 'react-native-animation-hooks';
import {Theme} from '../ThemeProvider';
import {getFont} from '../../utils/getFont';
import {useColors} from './Button.colors';
import {BtnUseStylesProps} from './types';

export const useStyles = ({
  isPressed,
  isDisabled,
  isLoading,
  variant,
  config,
}: BtnUseStylesProps) => {
  const colors = useColors({
    variant,
  });
  const theme = Theme;

  const animation = useAnimation({
    type: 'timing',
    initialValue: 0,
    toValue: isPressed ? 1 : 0,
    duration: 300,
    useNativeDriver: false,
  });

  const loaderVisibilityAnimation = useAnimation({
    type: 'timing',
    initialValue: 0,
    toValue: isLoading ? 1 : 0,
    duration: 150,
    useNativeDriver: false,
  });

  const font = getFont({
    languageCode: theme.languageCode,
    isRtl: theme.direction === 'rtl',
  });

  return {
    container: {
      borderColor: config.borderColor,
      borderWidth: config.borderWidth,
      borderRadius: config.borderRadius,
      backgroundColor: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          isDisabled
            ? colors.containerBackground.disabled
            : isLoading
            ? colors.containerBackground.loading
            : colors.containerBackground.idle,
          colors.containerBackground.pressed,
        ],
      }),
      position: 'relative',
    } as Animated.WithAnimatedObject<ViewStyle>,
    content: {
      paddingVertical: config.verticalPadding,
      paddingHorizontal: config.horizontalPadding,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: loaderVisibilityAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
    } as Animated.WithAnimatedObject<ViewStyle>,
    buttonText: {
      fontFamily: font.medium,
      fontSize: config.fontSize,
      lineHeight: config.lineHeight,
      color: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          isDisabled
            ? colors.text.disabled
            : isLoading
            ? colors.text.loading
            : colors.text.idle,
          colors.text.pressed,
        ],
      }),
    },
    icon: {
      color: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          isDisabled
            ? colors.icon.disabled
            : isLoading
            ? colors.icon.loading
            : colors.icon.idle,
          colors.icon.pressed,
        ],
      }),
    },
    loaderWrapper: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: loaderVisibilityAnimation,
      position: 'absolute',
      top: 0,
      left: 0,
      flexDirection: 'row',
    } as Animated.WithAnimatedObject<ViewStyle>,
    loader: {
      color: isDisabled ? colors.loader.disabled : colors.loader.idle,
      trackColor: isDisabled
        ? colors.loaderTrack.disabled
        : colors.loaderTrack.idle,
    },
  };
};
