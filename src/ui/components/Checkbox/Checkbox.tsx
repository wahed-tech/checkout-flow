import React, {FC} from 'react';
import {Animated, Pressable, View} from 'react-native';

import {IconCheckbox, IconCheckboxOutline} from '../Icons';
import {useMargin, useTestID} from '../../hooks';
import {Text} from '../Text';
import {useCheckable} from './Checkbox.hooks';
import {useStyles} from './Checkbox.styles';
import {CheckboxProps} from './props';
import {Theme} from '../ThemeProvider';

export const Checkbox: FC<CheckboxProps> = ({
  isChecked,
  type = 'checkbox',
  isDisabled,
  testID,
  label,
  onChange = () => null,
  ...rest
}) => {
  const theme = Theme;
  const styles = useStyles({
    isChecked,
    isDisabled,
  });
  const margin = useMargin(rest);

  const {getTestID} = useTestID({testID});

  const checkboxTestId = getTestID('checkbox');
  const checkable = useCheckable({
    isChecked,
    onChange,
  });

  return (
    <View style={[styles.container, ...margin]} testID="view-checkbox">
      <Pressable
        disabled={isDisabled}
        onPress={checkable.onChange}
        testID={checkboxTestId}
        accessibilityRole={type}
        accessibilityLabel={type}>
        <View style={styles.checkContainer}>
          <View>
            {type === 'checkbox' ? (
              checkable.isChecked ? (
                <IconCheckbox
                  color={
                    isDisabled ? theme.colors.lightGray4 : theme.colors.linkDark
                  }
                />
              ) : (
                <IconCheckboxOutline color={theme.colors.lightGray4} />
              )
            ) : (
              <View style={styles.radioContainer}>
                <View style={styles.radio}>
                  <Animated.View style={styles.radioCheck} />
                </View>
              </View>
            )}
          </View>
        </View>
      </Pressable>
      {label && (
        <Pressable
          disabled={isDisabled}
          onPress={checkable.onChange}
          testID={`${checkboxTestId}-label`}
          accessibilityRole="text"
          accessibilityLabel={`${type}-label`}>
          <Text
            testID="checkbox"
            variant="body4"
            color={isDisabled ? 'lightGray4' : 'darkGray'}
            marginStart="xs">
            {label}
          </Text>
        </Pressable>
      )}
    </View>
  );
};
