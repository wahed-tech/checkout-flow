import React, {FC} from 'react';
import {View} from 'react-native';

import {Button} from '../../Button';
import {Theme} from '../../ThemeProvider';

export type FooterButtonDoubleProps = {
  /**
   * Handles first button press
   */
  onPressFirstButton: () => void;
  /**
   * label of first button
   */
  firstButtonLabel: string;
  /**
   * Handles second button press
   */
  onPressSecondButton: () => void;
  /**
   * label of second button
   */
  secondButtonLabel: string;
};

export const FooterButtonDouble: FC<FooterButtonDoubleProps> = ({
  onPressFirstButton,
  onPressSecondButton,
  secondButtonLabel,
  firstButtonLabel,
}) => {
  const theme = Theme;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: theme.spacing.xxl,
      }}>
      <Button onPress={onPressFirstButton}>{firstButtonLabel}</Button>
      <Button
        onPress={onPressSecondButton}
        variant="primaryInverted"
        marginTop="xxxs">
        {secondButtonLabel}
      </Button>
    </View>
  );
};
