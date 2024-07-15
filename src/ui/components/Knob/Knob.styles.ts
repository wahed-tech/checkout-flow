import {useEffect, useRef} from 'react';
import {Animated, Easing, ViewStyle} from 'react-native';
import {useAnimation} from 'react-native-animation-hooks';

import {useColors} from './Knob.colors';
import {KnobProps} from './props';

type UseStylesProps = {
  isPressed: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  size: KnobProps['size'];
  variant: KnobProps['variant'];
};

export const useStyles = (props: UseStylesProps) => {
  const {isPressed, isDisabled, isLoading, size, variant} = props;
  const colors = useColors({variant});

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
  const spinningAnimation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinningAnimation.current, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return {
    container: {
      width: size === 'large' ? 48 : size === 'medium' ? 40 : 32,
      height: size === 'large' ? 48 : size === 'medium' ? 40 : 32,
      borderRadius: size === 'large' ? 48 : size === 'medium' ? 40 : 32,
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
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      opacity: loaderVisibilityAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
    } as Animated.WithAnimatedObject<ViewStyle>,
    icon: {
      color: isDisabled
        ? colors.icon.disabled
        : isLoading
        ? colors.icon.loading
        : isPressed
        ? colors.icon.pressed
        : colors.icon.idle,
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
    loaderContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      transform: [
        {
          rotate: spinningAnimation.current.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
      ],
    } as Animated.WithAnimatedObject<ViewStyle>,
    loader: {
      color: isDisabled ? colors.loader.disabled : colors.loader.idle,
      trackColor: isDisabled
        ? colors.loaderTrack.disabled
        : colors.loaderTrack.idle,
    },
  };
};
