import React, {FC, useState} from 'react';
import {boolean, object, string} from 'yup';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import * as yup from 'yup';

import {Text} from '../ui/components/Text';
import {Button} from '../ui/components/Button';
import {Form, FormTextInput} from '../ui/components/Form';
import {FormCheckbox} from '../ui/components/Form/FormCheckbox';
import {Modal} from '../ui/components/Modal';
import {
  FrameCardTokenizationFailedEvent,
  FrameCardTokenizedEvent,
  TokenizationParams,
} from './types/types';
import {tokenize} from '../utils/http';
declare module 'yup' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    cardExpiry(): StringSchema<TType, TContext, TDefault, TFlags>;
  }
}
// Adding a custom method to yup for expiry date validation
yup.addMethod(string, 'cardExpiry', function (message: any) {
  return this.test('cardExpiry', message, function (expiryDate: any) {
    const {path, createError} = this;
    if (!expiryDate) {
      return false;
    }
    const currentYear = new Date().getFullYear().toString().slice(2);
    const currentMonth = new Date().getMonth() + 1;
    const [month, year] = expiryDate.split('/');

    if (!month || !year) {
      return createError({path, message: message || 'invalid expiry date'});
    }
    if (month.length !== 2 || year.length !== 2) {
      return createError({path, message: message || 'MM/YY format required'});
    }
    if (month > 12 || month < 1) {
      return createError({path, message: message || 'Month is invalid'});
    }

    if (year === currentYear && month < new Date().getMonth()) {
      return createError({path, message: message || 'Month is in past'});
    }
    if (year < currentYear) {
      return createError({path, message: message || 'Year is in the past'});
    }
    if (
      (month < currentMonth && year < currentYear) ||
      (month > currentMonth && year < currentYear)
    ) {
      return createError({path, message: message || 'Date is already expired'});
    }
    // if (month > currentMonth && year === currentYear) {
    //   return createError({path, message: message || 'Year is in past'});
    // }

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

type CardScreenProps = {
  checkoutKey: string;
  cardTokenized: (e: FrameCardTokenizedEvent) => void;
  cardTokenizationFailed?: (e: FrameCardTokenizationFailedEvent) => void;
};

export const CardScreen: FC<CardScreenProps> = ({
  checkoutKey,
  cardTokenized,
  cardTokenizationFailed,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldShow3dsModal, setShouldShow3dsModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onPay = async (data: {
    fullName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    shouldSaveCard: true;
  }) => {
    try {
      setError(null);
      setIsError(false);
      setIsSubmitting(true);
      const tokenizeBody: TokenizationParams = {
        key: checkoutKey,
        body: {
          type: 'card',
          number: data.cardNumber,
          expiry_month: data.expiryDate.split('/')[0],
          expiry_year: data.expiryDate.split('/')[1],
          cvv: data.cvv,
          name: data.fullName,
          billing_address: undefined,
          phone: undefined,
        },
      };
      const tokenizedCard = await tokenize(tokenizeBody);
      //  incase of 3ds we will show the modal and wait for the user to complete the 3ds
      // setShouldShow3dsModal(true);
      cardTokenized(tokenizedCard as unknown as FrameCardTokenizedEvent);
    } catch (error) {
      setError(JSON.stringify(error));
      setIsError(true);
      if (cardTokenizationFailed) {
        cardTokenizationFailed(error as any);
      }
    } finally {
      setIsSubmitting(false);
    }
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
      shouldSaveCard: boolean().required('Should save card is required'),
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
                  isLoading={isSubmitting}
                  onPress={handleSubmit(onPay)}
                  size="medium"
                  marginTop="m">
                  Pay
                </Button>
              </>
            );
          }}
        </Form>
        <Modal
          variant="full-height"
          isVisible={shouldShow3dsModal}
          onClose={() => {
            setShouldShow3dsModal(false);
          }}>
          <Text margin="m">
            {/* once 3ds is user will be redirect to our url will close the modal and user will move forward in wahed app  */}
            3D secure authentication is required. Please complete the
            authentication process to continue
          </Text>
        </Modal>
        <Modal
          variant="full-width"
          isVisible={isError}
          onClose={() => {
            setIsError(false);
          }}>
          <Text margin="m">
            There was an error processing your payment. Please try again later{' '}
            {error}
          </Text>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};
