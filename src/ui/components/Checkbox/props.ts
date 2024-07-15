import { ReactElement } from 'react';
import { UseMarginProps, UseTestIDProps } from '../../hooks';

export type CheckboxProps = {
  /*
   * If true, will check the checkbox. If set, the component will become
   * controlled component
   */
  isChecked?: boolean;

  /*
   * If true, will disable the checkbox. User won't be able to interact with it
   */
  isDisabled?: boolean;

  /*
   * Label for the checkbox. Can be string or JSX markup
   */
  label?: ReactElement | string;

  /**
   * Checkbox type
   *
   * @default 'checkbox'
   */
  type?: 'checkbox' | 'radio';

  /*
   * Handles change of the checkbox state
   */
  onChange(isChecked?: boolean): void;
} & UseMarginProps &
  UseTestIDProps;
