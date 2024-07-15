import React from 'react';
import {number, object, string} from 'yup'; // Import the 'yup' library

import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {Text} from './src/ui/components/Text';
import {Button} from './src/ui/components/Button';
import {Form, FormTextInput} from './src/ui/components/Form';

import * as yup from 'yup';
import {FormCheckbox} from './src/ui/components/Form/FormCheckbox';
declare module 'yup' {
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    cardExpiry(): StringSchema<TType, TContext, TDefault, TFlags>;
  }
}
// Adding a custom method to yup for expiry date validation
yup.addMethod(yup.string, 'cardExpiry', function (message) {
  return this.test('cardExpiry', message, function (expiryDate) {
    const {path, createError} = this;
    if (!expiryDate) {
      return false;
    }
    const [month, year] = expiryDate.split('/');
    if (!month || !year) {
      return createError({path, message: message || 'invalid expiry date'});
    }
    if (month.length !== 2 || year.length !== 2) {
      return createError({path, message: message || 'MM/YY format required'});
    }
    if (parseInt(month, 2) > 12 || parseInt(month, 2) < 1) {
      return createError({path, message: message || 'Month is invalid'});
    }

    const currentYear = new Date().getFullYear().toString().slice(2);
    if (
      parseInt(year, 2) === parseInt(currentYear, 2) &&
      parseInt(month, 2) < new Date().getMonth()
    ) {
      return false;
    }
    if (parseInt(year, 2) < parseInt(currentYear, 2)) {
      return createError({path, message: message || 'Year is invalid'});
    }

    return true; // Valid expiry date
  });
});
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
const App = (): React.JSX.Element => {
  const onPay = data => {
    // DO Something with data
  };

  const getCardNumberSchema = () =>
    object().shape({
      fullName: string()
        .min(2)
        .matches(
          /^[a-zA-Z]*[a-zA-Z-']+( [a-zA-Z-']+)*$/,
          'full name should have only alphabets',
        )
        .required('Full name is required'),
      cardNumber: string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(16)
        .max(19)
        .required("Card number can't be empty"),
      expiryDate: string()
        .matches(/^[0-9/]+$/, 'Must be only digits')
        .cardExpiry()
        .required('Expiry date is required'),
      cvv: string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(3)
        .max(4)
        .required('CVV is required'),
      shouldSaveCard: yup.boolean().required('Should save card is required'),
    });

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text variant="headline1">Payment details</Text>
        <Text variant="body2" color="lightGray3" marginBottom="xl">
          Please enter your card details to continue
        </Text>
        <Form
          defaultValues={{
            fullName: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            shouldSaveCard: true,
          }}
          validationSchema={getCardNumberSchema()}>
          {({handleSubmit}) => {
            return (
              <>
                <View>
                  <Text variant="label2" color="lightGray2" marginBottom="-s">
                    Name on card
                  </Text>
                  <FormTextInput
                    value=""
                    placeholder="John Doe"
                    name="fullName"
                    maxLength={19}
                  />
                  <Text variant="label2" color="lightGray2" marginBottom="-s">
                    Card number
                  </Text>
                  <FormTextInput
                    value=""
                    placeholder="1234 567 8901 1234"
                    name="cardNumber"
                    maxLength={19}
                  />
                </View>
                <View style={styles.row}>
                  <View style={{flex: 1, marginEnd: 10}}>
                    <Text variant="label2" color="lightGray2" marginBottom="-s">
                      Expiry date
                    </Text>
                    <FormTextInput
                      maxLength={5}
                      placeholder="MM/YY"
                      name="expiryDate"
                    />
                  </View>
                  <View style={{flex: 1, marginStart: 10}}>
                    <Text variant="label2" color="lightGray2" marginBottom="-s">
                      CVV
                    </Text>
                    <FormTextInput maxLength={3} placeholder="123" name="cvv" />
                  </View>
                </View>

                <FormCheckbox
                  name="shouldSaveCard"
                  label="Save my card"
                  marginTop="m"
                />

                <Text variant="body4" color="lightGray3" marginTop="xxxl">
                  By clicking proceeding I agree to the terms and conditions
                </Text>
                <Button
                  onPress={handleSubmit(onPay)}
                  size="medium"
                  marginTop="m">
                  Pay
                </Button>
              </>
            );
          }}
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
