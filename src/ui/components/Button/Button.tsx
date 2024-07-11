import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {
  Animated,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from 'react-native';
import {withAnimation} from '../../hocs/withAnimation';
import {useMargin, useTestID} from '../../hooks';
import {useConfiguration} from './Button.config';
import {useStyles} from './Button.styles';
import {ButtonProps} from './types';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size = 'large',
  variant = 'primary',
  iconPosition = 'end',
  testID,
  accessibility,
  onPress,
  children,
  isDisabled,
  isLoading,
  icon: Icon,
  ...rest
}) => {
  const {getTestID} = useTestID({testID});
  const [isPressed, setIsPressed] = useState(false);

  const config = useConfiguration(variant, size, !!Icon);
  const margin = useMargin(rest);
  const styles = useStyles({
    isPressed,
    variant,
    isDisabled,
    isLoading,
    hasIcon: Icon ? true : false,
    config,
  });

  const icon = useMemo(() => {
    if (!Icon) {
      return null;
    }

    const AnimatedIcon = withAnimation(Icon);

    return (
      !!Icon && (
        <View
          style={{
            marginEnd:
              iconPosition === 'start' ? (size === 'small' ? 4 : 8) : -2,
            marginStart:
              iconPosition === 'end' ? (size === 'small' ? 4 : 8) : -2,
          }}>
          <AnimatedIcon size={config.iconSize} color={styles.icon.color} />
        </View>
      )
    );
  }, [Icon, config.iconSize, iconPosition, size, styles.icon.color]);

  return (
    <TouchableHighlight
      accessible={true}
      accessibilityRole={accessibility?.role || 'button'}
      accessibilityLabel={accessibility?.label}
      accessibilityHint={accessibility?.hint}
      accessibilityState={{disabled: isDisabled ? true : false}}
      activeOpacity={1}
      underlayColor="transparent"
      disabled={isDisabled || isLoading}
      style={margin}
      onPress={onPress}
      testID={getTestID('button')}
      onHideUnderlay={() => setIsPressed(false)}
      onShowUnderlay={() => setIsPressed(true)}>
      <Animated.View style={styles.container}>
        <Animated.View style={styles.content}>
          {iconPosition === 'start' && icon}
          <Animated.Text style={styles.buttonText} allowFontScaling={false}>
            {children}
          </Animated.Text>
          {iconPosition === 'end' && icon}
        </Animated.View>
        <Animated.View style={styles.loaderWrapper}>
          <ActivityIndicator
            size={config.loaderSize}
            color={styles.loader.color}
          />
        </Animated.View>
      </Animated.View>
    </TouchableHighlight>
  );
};
