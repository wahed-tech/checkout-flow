import React, {FC, PropsWithChildren, useEffect, useRef, useState} from 'react';
import {Animated, Modal, Pressable, View} from 'react-native';

import {IconClose} from '../../Icons';
import {useTestID, useTheme} from '../../../hooks';
import {useStyles} from '../Modal.styles';
import {ModalProps} from '../props';

export const ModalOverlay: FC<PropsWithChildren<ModalProps>> = ({
  backgroundColor = 'primary',
  variant,
  footer,
  testID,
  isVisible,
  isAnimated,
  onClose,
  children,
}) => {
  const [isShown, setIsShown] = useState(isVisible);
  const styles = useStyles({
    variant: variant,
    isFooterVisible: !!footer,
    isCloseButtonVisible: !!onClose,
  });
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const theme = useTheme();
  const {getTestID} = useTestID({testID: testID});

  useEffect(() => {
    let visibilityTimeout: null | ReturnType<typeof setTimeout> = null;
    if (isAnimated) {
      Animated.timing(fadeAnim, {
        toValue: isShown ? 1 : 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
      visibilityTimeout = setTimeout(() => {
        setIsShown(!!isShown);
      }, 600);
    } else {
      setIsShown(!!isShown);
    }

    return () => {
      if (visibilityTimeout === null) {
        return;
      }
      clearTimeout(visibilityTimeout);
    };
  }, [isVisible, isShown, setIsShown, isAnimated, fadeAnim]);

  return (
    <Modal visible={isShown} transparent={true} testID={getTestID('modal')}>
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
          <View
            style={{
              height: '100%',
              backgroundColor: theme.colors[backgroundColor],
            }}
            testID={getTestID('theme-overlay')}>
            {!!onClose && (
              <Pressable
                style={[styles.closeButton]}
                hitSlop={40}
                onPress={onClose}>
                <IconClose color={theme.colors.white} />
              </Pressable>
            )}
            {children}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};
