import React, {FC} from 'react';
import {View} from 'react-native';

import {Button} from '../../Button';

export type FooterButtonSingleProps = {
  /**
   * Handles button press
   */
  onPress: () => void;
  /**
   * label of button
   */
  label: string;
};

export const FooterButtonSingle: FC<FooterButtonSingleProps> = ({
  onPress,
  label,
}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={onPress} marginBottom="xxl">
        {label}
      </Button>
    </View>
  );
};
