import {FC} from 'react';
// import {IconProps} from '@wahed-tech/icons';

import {UseMarginProps, UseTestIDProps} from '../../hooks';

export type KnobProps = {
  /**
   * Web only: if set, will render a tag with href instead of button
   */
  href?: string;
  /**
   * Handles knob press
   */
  onPress?: () => void;

  /**
   * If set to true, will put the component in disabled state
   */
  isDisabled?: boolean;

  /**
   * If set to true, will disable knob interaction and show loader
   */
  isLoading?: boolean;

  /**
   * Icon
   */
  icon?: FC<any>;

  /**
   * Button size
   *
   * @default 'large'
   */
  size?: 'large' | 'medium' | 'small';

  /**
   * variant
   *
   * @default 'primary'
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'quinary'
    | 'whatsApp';
} & UseMarginProps &
  UseTestIDProps;
