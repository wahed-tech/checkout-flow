import React from 'react';
import * as yup from 'yup'; // Import the 'yup' library

import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {Text} from './src/ui/components/Text';
import {Button} from './src/ui/components/Button';
import {Form, FormTextInput} from './src/ui/components/Form';

function App(): React.JSX.Element {
  const onPay = data => {
    console.log('zohaib ----- data', data);
  };
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Text variant="headline2">Payment details</Text>
        <Form
          defaultValues={{
            cardNumber: '',
            expiryDate: '',
            cvv: '',
          }}
          validationSchema={getCardNumberSchema()}>
          {({handleSubmit}) => {
            return (
              <>
                <View>
                  <Text variant="label2">Card Number </Text>
                  <FormTextInput
                    value=""
                    placeholder="1234 567 8901 1234"
                    name={'cardNumber'}
                  />
                </View>
                <View style={styles.row}>
                  <View style={{flex: 1, marginEnd: 10}}>
                    <Text variant="label2">Expiry date</Text>
                    <FormTextInput
                      maxLength={5}
                      placeholder="MM/YY"
                      name={'expiryDate'}
                    />
                  </View>
                  <View style={{flex: 1, marginStart: 10}}>
                    <Text variant="label2">CVV</Text>
                    <FormTextInput
                      maxLength={3}
                      placeholder="123"
                      name={'cvv'}
                    />
                  </View>
                </View>
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
}

const getCardNumberSchema = () =>
  yup.object().shape({
    cardNumber: yup.string().required("Card number can't be empty"),
    expiryDate: yup
      .string()
      .trim("`Expiry date` can't be empty")
      .required('Expiry date is required'),
    cvv: yup.string().required('CVV is required'),
  });
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    height: 60,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default App;
