import {forwardRef, useEffect} from 'react';
import {
  FieldError,
  RegisterOptions,
  useController,
  useFormContext,
} from 'react-hook-form';
import {InputText, InputTextProps, InputTextRef} from '../InputText';

export type FormTextInputProps = {
  name: string;
  errorObj?: FieldError;
  onChange?: RegisterOptions['onChange'];
  isRequired?: boolean;
  hideValidatedIcon?: boolean;
} & Omit<InputTextProps, 'onChange' | 'error' | 'isDisabled'>;

export const FormTextInput = forwardRef<InputTextRef, FormTextInputProps>(
  (
    {
      name,
      errorObj,
      label,
      placeholder,
      onChange,
      isRequired,
      isReadOnly,
      marginTop = 'm',
      hideValidatedIcon,
      ...rest
    },
    ref,
  ) => {
    const {getFieldState, setError, control} = useFormContext();

    const {
      field: {value, onChange: onChangeField, onBlur},
      fieldState: {error: fieldError},
    } = useController({
      name,
      control,
    });

    const isValid = !getFieldState(name).invalid && Boolean(value);

    useEffect(() => {
      if (errorObj?.message) {
        setError(name, errorObj);
      }
    }, [name, setError, errorObj]);

    return (
      <InputText
        {...rest}
        label={label ? `${label} ${isRequired ? '*' : ''}` : undefined}
        placeholder={
          placeholder ? `${placeholder} ${isRequired ? '*' : ''}` : undefined
        }
        value={value}
        defaultValue={value}
        onBlur={onBlur}
        marginTop={marginTop}
        onChange={onChange ? onChange : onChangeField}
        isReadOnly={isReadOnly}
        isValidated={hideValidatedIcon ? undefined : isValid}
        error={fieldError?.message}
        ref={ref}
      />
    );
  },
);
