import React, {FC, PropsWithChildren, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Modal, Pressable, View} from 'react-native';

import {useTestID} from '../../../hooks';
import {Text} from '../../Text';
import {useStyles} from '../Modal.styles';
import {ModalProps} from '../props';
import {ModalBody} from './ModalBody';

const ModalDefaultAnimated: FC<
  PropsWithChildren<
    Omit<ModalProps, 'variant'> & {
      variant: 'default' | 'full-width' | 'full-height';
      onChangeVisibility(isVisible: boolean): void;
    }
  >
> = ({
  illustration,
  isVisible,
  isAnimated,
  onClose,
  variant,
  backgroundColor,
  title,
  description,
  children,
  onChangeVisibility,
  footer,
}) => {
  const styles = useStyles({
    variant: variant,
    isFooterVisible: !!footer,
    isCloseButtonVisible: !!onClose,
  });
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const topAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let visibilityTimeout: null | ReturnType<typeof setTimeout> = null;
    if (isAnimated) {
      Animated.timing(fadeAnim, {
        toValue: isVisible ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(topAnim, {
        toValue: isVisible ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
      visibilityTimeout = setTimeout(() => {
        onChangeVisibility(!!isVisible);
      }, 300);
    } else {
      onChangeVisibility(!!isVisible);
    }

    return () => {
      if (visibilityTimeout === null) {
        return;
      }

      clearTimeout(visibilityTimeout);
    };
  }, [isVisible, onChangeVisibility, isAnimated, fadeAnim, topAnim]);

  return (
    <View style={[styles.modal]}>
      <Animated.View
        style={[
          styles.overlay,
          isAnimated
            ? {
                opacity: fadeAnim,
              }
            : {},
        ]}>
        <Pressable
          style={{
            width: '100%',
            height: '100%',
          }}
          onPress={onClose}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.wrapper,
          isAnimated
            ? {
                bottom: topAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['-100%', '0%'],
                }),
              }
            : {
                bottom: 0,
              },
        ]}>
        <ModalBody
          onClose={onClose}
          variant={variant}
          backgroundColor={backgroundColor}>
          <View style={styles.body}>
            {!!illustration && (
              <View style={styles.illustration}>{illustration}</View>
            )}
            {!!title && (
              <Text
                testID="title"
                variant="headline2"
                textAlign="center"
                color="darkGray"
                marginTop={illustration ? 's' : 'm'}
                marginHorizontal="m">
                {title}
              </Text>
            )}
            {!!description && (
              <Text
                testID="description"
                variant="body3"
                textAlign="center"
                color="lightGray3"
                marginTop="s"
                marginHorizontal="m">
                {description}
              </Text>
            )}
            {children}
          </View>
          {!!footer && <View style={styles.footer}>{footer}</View>}
        </ModalBody>
      </Animated.View>
    </View>
  );
};

export const ModalDefault: FC<
  PropsWithChildren<
    Omit<ModalProps, 'variant'> & {
      variant: 'default' | 'full-width' | 'full-height';
    }
  >
> = props => {
  const {getTestID} = useTestID({testID: props.testID});
  const [isVisible, setIsVisible] = useState(props.isVisible);

  useEffect(() => {
    if (props.isVisible) {
      setIsVisible(true);
    }
  }, [props.isVisible]);

  return (
    <Modal visible={isVisible} transparent={true} testID={getTestID('modal')}>
      <ModalDefaultAnimated onChangeVisibility={setIsVisible} {...props} />
    </Modal>
  );
};
