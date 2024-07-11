import React, {useMemo, useRef, useState} from 'react';
import {Animated, Easing, LayoutChangeEvent, View} from 'react-native';

import {UseRippleProps, UseRippleReturn} from './types';

/**
 * Creates nice ripple effect within the container
 * @see https://medium.com/react-native-motion/ripple-effect-in-react-native-1cb0ad568e91
 */
export const useRipple = (props?: UseRippleProps): UseRippleReturn => {
  const {color = 'black', maxOpacity = 0.5, height, width} = props || {};
  const scale = useRef(new Animated.Value(0.01));
  const opacity = useRef(new Animated.Value(maxOpacity));
  const [containerDimensions, setContainerDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const onPressIn = () => {
    Animated.timing(scale.current, {
      toValue: 1,
      duration: 130,
      easing: Easing.bezier(0.0, 0.0, 0.1, 1),
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(opacity.current, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      scale.current.setValue(0.01);
      opacity.current.setValue(maxOpacity);
    });
  };

  const onRippleContainerLayout = (event: LayoutChangeEvent) => {
    setContainerDimensions({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.width,
    });
  };

  const ripple = useMemo(() => {
    return (
      <View
        onLayout={onRippleContainerLayout}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {!!containerDimensions && (
          <Animated.View
            style={{
              transform: [{scale: scale.current}],
              width: width || containerDimensions.width * 2,
              height: height || containerDimensions.height * 2,
              borderRadius: height ? height / 2 : containerDimensions.height,
              opacity: opacity.current,
              backgroundColor: color,
            }}
          />
        )}
      </View>
    );
  }, [containerDimensions, width, height, color]);

  return {
    onPressIn,
    onPressOut,
    ripple,
  };
};
