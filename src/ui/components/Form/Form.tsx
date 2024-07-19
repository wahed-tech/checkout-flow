import {ReactNode, useEffect} from 'react';
import {
  CriteriaMode,
  DefaultValues,
  FieldErrors,
  FieldValues,
  FormProvider,
  KeepStateOptions,
  Resolver,
  SubmitErrorHandler,
  useForm,
  UseFormReset,
  UseFormReturn,
  ValidationMode,
} from 'react-hook-form';
import {StyleProp, View, ViewStyle} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export type FormProps<T extends FieldValues> = {
  children?: ((props: UseFormReturn<T>) => ReactNode) | ReactNode;
  values?: T;
  defaultValues?: DefaultValues<T>;
  validationSchema?: yup.ObjectSchema<T>;
  validationMode?: keyof ValidationMode;
  shouldUnregister?: boolean;
  onSubmitOnChange?: (data: T, reset: UseFormReset<T>) => void;
  resetOptions?: KeepStateOptions;
  errors?: FieldErrors<T>;
  onError?: SubmitErrorHandler<T>;
  criteriaMode?: CriteriaMode;
  style?: StyleProp<ViewStyle>;
};

export const Form = <T extends FieldValues>({
  children,
  values,
  defaultValues,
  validationSchema,
  validationMode = 'onSubmit',
  shouldUnregister,
  onSubmitOnChange,
  resetOptions,
  criteriaMode,
  errors,
  onError,
  style,
}: FormProps<T>) => {
  const resolver = validationSchema
    ? (yupResolver(validationSchema) as unknown as Resolver<T>)
    : undefined;

  const methods = useForm<T>({
    resolver,
    values,
    defaultValues,
    errors,
    resetOptions,
    shouldUnregister,
    criteriaMode,
    mode: validationMode,
  });
  const {handleSubmit, reset, watch, formState} = methods;

  useEffect(() => {
    if (onSubmitOnChange && formState.isValid) {
      handleSubmit((data: T) => onSubmitOnChange(data, reset), onError)();
    }
  }, [
    formState.isValid,
    handleSubmit,
    onError,
    onSubmitOnChange,
    reset,
    watch,
  ]);

  return (
    <FormProvider {...methods}>
      <View style={style}>
        {typeof children === 'function' ? children({...methods}) : children}
      </View>
    </FormProvider>
  );
};
