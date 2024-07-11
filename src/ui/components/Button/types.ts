import {FC} from 'react';
import {UseMarginProps, UseTestIDProps} from '../../hooks';
import {AccessibilityProps} from '../../types/AccessibilityProps';

type ButtonSizes = 'large' | 'medium' | 'small';

export type ButtonProps = {
  /**
   * Web only: if set, will render the a tag instead of button
   */
  href?: string;

  /**
   * Handles button press
   */
  onPress?: () => void;

  /**
   * Button variant from design system
   *
   * @default 'large'
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primaryInverted'
    | 'minimal'
    | 'quaternary'
    | 'quinary';

  /**
   * If set to true, will put the component in disabled state
   */
  isDisabled?: boolean;

  /**
   * If set to true, will disable button interaction and show loader
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
  size?: ButtonSizes;

  /**
   * Icon position If set, will render icon at the start or end of a button
   *
   * @default 'end'
   */
  iconPosition?: 'start' | 'end';

  /**
   * If set, will add accessibility properties button
   */
  accessibility?: AccessibilityProps;
} & UseMarginProps &
  UseTestIDProps;

export type BtnConfiguration = {
  borderRadius: number;
  borderColor?: string;
  borderWidth: number;
  iconSize: string;
  fontSize: number;
  verticalPadding: number;
  horizontalPadding: number;
  loaderSize: number;
  lineHeight?: number;
};

export type BtnUseStylesProps = {
  isPressed: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  variant: ButtonProps['variant'];
  hasIcon: boolean;
  config: BtnConfiguration;
};
