import {FC, useEffect} from 'react';
import {FieldError, useController, useFormContext} from 'react-hook-form';

import {Checkbox, CheckboxProps} from '../Checkbox';

export type FormCheckboxProps = {
  name: string;
  isRequired?: boolean;
  errorObj?: FieldError;
  testID?: string;
} & Omit<CheckboxProps, 'onChange'>;

export const FormCheckbox: FC<FormCheckboxProps> = ({
  name,
  label,
  isDisabled,
  errorObj,
  testID,
  ...rest
}) => {
  const {control, setError} = useFormContext();

  const {
    field: {value: checked, onChange},
  } = useController({
    name,
    control,
    disabled: isDisabled,
  });

  useEffect(() => {
    if (errorObj?.message) {
      setError(name, errorObj);
    }
  }, [name, setError, errorObj]);

  return (
    <Checkbox
      {...rest}
      testID={testID}
      label={label}
      isChecked={checked}
      isDisabled={isDisabled}
      onChange={onChange}
    />
  );
};
