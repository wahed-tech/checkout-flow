import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Platform,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
} from 'react-native';

// import {IconAbout, IconCheck, IconClose} from '@wahed-tech/icons';
import {useMargin, useTestID} from '../../hooks';
import {Theme} from '../ThemeProvider';
import {Text} from '../Text';
import {useStyles} from './InputText.styles';
import {InputTextProps, InputTextRef} from './props';

export const InputText = forwardRef<InputTextRef, InputTextProps>(
  (
    {
      type = 'text',
      testID,
      label,
      placeholder,
      value: valueProps,
      defaultValue: defaultValueProps,
      onChange = () => null,
      onTextClear,
      isDisabled = false,
      isValidated = false,
      isReadOnly = false,
      autoFocus = false,
      onFocus,
      onBlur,
      error,
      maxLength,
      prefixIcon,
      ...restProps
    },
    ref,
  ) => {
    const theme = Theme;
    const margin = useMargin(restProps);
    const {getTestID} = useTestID({testID});
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState(valueProps || '');
    const [defaultValue, setDefaultValue] = useState(defaultValueProps);
    const PrefixIcon = prefixIcon;
    const styles = useStyles({
      isFocused,
      isFilled: !!value,
      isDisabled,
      isReadOnly,
      hasLabel: !!label,
    });

    const inputRef = useRef<TextInput>(null);
    useImperativeHandle(ref, () => ({
      focus: () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
    }));

    useEffect(() => {
      setValue(valueProps || defaultValueProps || '');
      setDefaultValue(defaultValueProps);
    }, [valueProps, defaultValueProps]);

    const handleOnFocus = (
      e: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      if (onFocus) {
        onFocus(e);
      }
      setIsFocused(true);
    };
    const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (onBlur) {
        onBlur(e);
      }
      setIsFocused(false);
    };
    const onChangeText = (value: string) => {
      setValue(value);
      setDefaultValue(value);
      onChange(value);
    };

    const handleOnClearText = () => {
      if (onTextClear) {
        onTextClear();
      }

      setValue('');
      setDefaultValue(defaultValueProps);
      onChange('');
    };

    const keyboardType: KeyboardTypeOptions = useMemo(() => {
      switch (type) {
        case 'email':
          return 'email-address';
        case 'number':
          return 'numeric';
        default:
          return 'default';
      }
    }, [type]);

    const isAndroidRtl = () => {
      return Platform.OS === 'android' && theme.direction === 'rtl';
    };

    return (
      <View style={[styles.wrapper, margin]} testID={getTestID('input-text')}>
        <Animated.View style={styles.container}>
          {!!PrefixIcon && (
            <View style={styles.prefixIconContainer}>
              <PrefixIcon
                color={
                  isDisabled || isReadOnly
                    ? theme.colors.lightGray4
                    : theme.colors.darkGray
                }
              />
            </View>
          )}
          <Animated.View style={styles.inputContainer}>
            <Animated.Text
              style={styles.label}
              numberOfLines={1}
              ellipsizeMode="tail"
              allowFontScaling={false}>
              {isFocused || !!value ? label : placeholder || label}
            </Animated.Text>
            {/* unable to show ellipsis as ellipsizeMode is not supported by TextInput  */}
            <TextInput
              // @ts-ignore: this is ok, react native must have forgotten to add it in the types decalarations
              readOnly={isReadOnly}
              value={value}
              defaultValue={defaultValue}
              onChangeText={onChangeText}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              underlineColorAndroid="transparent"
              allowFontScaling={false}
              autoComplete={type === 'email' ? 'email' : undefined}
              textContentType={type === 'email' ? 'emailAddress' : undefined}
              autoCorrect={false}
              autoCapitalize={type === 'email' ? 'none' : 'sentences'}
              editable={!isDisabled}
              style={styles.input}
              keyboardType={keyboardType}
              maxLength={maxLength}
              testID={getTestID('input')}
              textAlign={theme.direction === 'rtl' ? 'right' : 'left'}
              multiline={isAndroidRtl()} // fixes https://github.com/facebook/react-native/issues/12167
              returnKeyType={isAndroidRtl() ? 'done' : 'default'}
              blurOnSubmit={isAndroidRtl()}
              numberOfLines={1}
              autoFocus={autoFocus}
              ref={inputRef}
            />
          </Animated.View>
          <View style={styles.iconContainer}>
            {/* {isValidated && !error && (
              <IconCheck size="xxs" color={theme.colors.approved} />
            )}
            {!!error && <IconAbout size="xxs" color={theme.colors.error} />} */}
            {!!value && !isDisabled && !isReadOnly && (
              <TouchableOpacity
                onPress={handleOnClearText}
                style={{marginStart: theme.spacing.xxxs}}>
                {/* <IconClose size="xxs" color={theme.colors.darkGray} /> */}
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
        {!!error && (
          <Text
            variant="body5"
            color="error"
            marginTop="xxxs"
            marginHorizontal="s"
            textAlign="start">
            {error}
          </Text>
        )}
      </View>
    );
  },
);
