import React, {FC, useMemo, useState} from 'react';
import {Animated, TouchableHighlight} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Svg, {Path} from 'react-native-svg';
// import {IconWhatsApp2} from '@wahed-tech/icons';

import {useMargin, useTestID} from '../../hooks';
import {useStyles} from './Knob.styles';
import {KnobProps} from './props';

export const Knob: FC<KnobProps> = ({
  onPress,
  size,
  isDisabled,
  isLoading,
  icon: Icon,
  testID,
  variant = 'primary',
  ...rest
}) => {
  const margin = useMargin(rest);
  const [isPressed, setIsPressed] = useState(false);
  const styles = useStyles({
    isPressed,
    size,
    isDisabled,
    isLoading,
    variant,
  });

  const {getTestID} = useTestID({testID});
  const icon = useMemo(() => {
    if (variant === 'whatsApp') {
      return (
        <></>
        // <IconWhatsApp2
        //   color={styles.icon.color}
        //   size={size === 'large' ? 'xxs' : size === 'medium' ? 'ss' : 'sss'}
        // />
      );
    }
    if (!Icon) {
      return null;
    }

    return (
      !!Icon && (
        <Icon
          color={styles.icon.color}
          size={size === 'large' ? 'xxs' : size === 'medium' ? 'ss' : 'sss'}
        />
      )
    );
  }, [Icon, styles.icon, size, variant]);

  const loaderSize = size === 'large' ? 24 : size === 'medium' ? 20 : 16;

  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="transparent"
      disabled={isDisabled || isLoading}
      style={margin}
      onPress={onPress}
      testID={getTestID('knob')}
      onHideUnderlay={() => setIsPressed(false)}
      onShowUnderlay={() => setIsPressed(true)}>
      <Animated.View style={styles.container}>
        <Animated.View style={styles.content}>{icon}</Animated.View>
        <Animated.View style={styles.loaderWrapper}>
          <Animated.View style={styles.loaderContainer}>
            <Svg
              fill="none"
              width={loaderSize}
              height={loaderSize}
              viewBox="0 0 24 24">
              <Path
                fill={styles.loader.trackColor}
                fillRule="evenodd"
                d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
                clipRule="evenodd"
              />
              <Path
                fill={styles.loader.color}
                fillRule="evenodd"
                d="M21 12a9 9 0 0 0-9-9V1c6.075 0 11 4.925 11 11h-2Z"
                clipRule="evenodd"
              />
            </Svg>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </TouchableHighlight>
  );
};
