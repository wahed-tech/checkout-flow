import {StyleProp, ViewStyle} from 'react-native';
import {useAnimation} from 'react-native-animation-hooks';

import {Theme} from '../ThemeProvider';

type UseStylesProps = {
  isChecked?: boolean;
  isDisabled?: boolean;
};

export const useStyles = (props: UseStylesProps) => {
  const theme = Theme;

  const animatedRadioSize = useAnimation({
    type: 'timing',
    initialValue: 0,
    toValue: props.isChecked ? 1 : 0,
    duration: 150,
    useNativeDriver: false,
  });

  return {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    } as StyleProp<ViewStyle>,
    checkContainer: {
      width: 20,
      height: 20,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    } as StyleProp<ViewStyle>,
    radioContainer: {
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
    } as StyleProp<ViewStyle>,
    radio: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: props.isDisabled
        ? theme.colors.lightGray4
        : props.isChecked
        ? theme.colors.linkDark
        : theme.colors.lightGray4,
      alignItems: 'center',
      justifyContent: 'center',
    } as StyleProp<ViewStyle>,
    radioCheck: {
      width: animatedRadioSize.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
      }),
      height: animatedRadioSize.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
      }),
      borderRadius: 10,
      backgroundColor: props.isDisabled
        ? theme.colors.lightGray4
        : props.isChecked
        ? theme.colors.linkDark
        : theme.colors.lightGray4,
    },
  };
};
