import {FC, RefAttributes} from 'react';

import {UseMarginProps, UseTestIDProps} from '../../hooks';

export type InputTextRef = {
  /**
   * When called, will focus inputText component
   */
  focus: () => void;
};

export type InputTextProps = {
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'number';

  /**
   * Input label
   */
  label?: string;

  /**
   * Input value.
   * If set, component will become a controlled component
   */
  value?: string;

  /**
   * Input default value.
   * Provides an initial value that is returned even when isDisabled is true
   * the value will change when the user starts typing.
   * see: https://reactnative.dev/docs/textinput#defaultvalue
   */
  defaultValue?: string;

  /**
   * If set, will display placeholder instead of label if
   * component is empty
   */
  placeholder?: string;

  /**
   * If set to true, will disable input
   */
  isDisabled?: boolean;

  /**
   * If set to true, will show validated icon
   */
  isValidated?: boolean;

  /**
   * marks the field as read only
   */
  isReadOnly?: boolean;

  /**
   * Error message. If set, will render input in error state
   */
  error?: string;

  /**
   * If set to true, will set maximum length
   */
  maxLength?: number;

  /**
   * If set to true, will automatically focus input element
   */
  autoFocus?: boolean;

  /**
   * Returns the React or Native Focus event
   */
  onFocus?: (e: any) => void;

  /**
   * Returns the  React or Native Blur event
   */
  onBlur?: (e: any) => void;

  /**
   * Prefix icon to be shown on the start of the component
   */
  prefixIcon?: FC<any>;

  /**
   * Callback function called when clear icon is clicked
   */
  onTextClear?: () => void;

  /**
   * Handles input text change
   */
  onChange?: (value: string) => void;
} & UseMarginProps &
  UseTestIDProps &
  RefAttributes<InputTextRef>;
