import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';

import {IconClose} from '../../Icons';
import {UseTestIDProps} from '../../../hooks';
import {useTheme} from '../../../hooks/useTheme';
import {Knob} from '../../Knob';
import {Theme} from '../../ThemeProvider';

export type ModalBodyProps = {
  /**
   * Body variant
   * 'default' -> there is margin between body and parent container borders
   * 'full-width' -> no bottom and horizontal margin of the body
   * 'full-height' -> body almost fully covers the screen
   *
   * @default 'default'
   */
  variant?: 'default' | 'full-width' | 'full-height';

  /**
   * Body color
   *
   * @default "white"
   */
  backgroundColor?: keyof (typeof Theme)['colors'];

  /**
   * Handles close button press
   **/
  onClose?: () => void;
} & UseTestIDProps;

export const ModalBody: FC<PropsWithChildren<ModalBodyProps>> = ({
  variant = 'default',
  backgroundColor = 'white',
  onClose,
  children,
}) => {
  const theme = useTheme();

  return (
    <View
      style={{
        borderRadius: 24,
        height: variant === 'full-height' ? '100%' : undefined,
        marginHorizontal: variant === 'default' ? theme.spacing.s : 0,
        backgroundColor: theme.colors[backgroundColor],
        borderBottomEndRadius: variant !== 'default' ? 0 : undefined,
        borderBottomStartRadius: variant !== 'default' ? 0 : undefined,
        marginBottom: variant === 'default' ? theme.spacing.xl : 0,
      }}>
      {!!onClose && (
        <View style={{alignSelf: 'flex-end'}}>
          <Knob
            testID="modal-close"
            margin="xs"
            icon={IconClose}
            size="small"
            onPress={onClose}
            variant="secondary"
          />
        </View>
      )}
      {children}
    </View>
  );
};
