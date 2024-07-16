import React from 'react';
import {SafeAreaView} from 'react-native';

import {
  CardScreen,
  FrameCardTokenizationFailedEvent,
  FrameCardTokenizedEvent,
} from './src/CardScreen';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <CardScreen
        key="pk_test_1234567890"
        cardTokenized={function (e: FrameCardTokenizedEvent): void {
          throw new Error('Function not implemented.');
        }}
        cardTokenizationFailed={function (
          e: FrameCardTokenizationFailedEvent,
        ): void {
          throw new Error('Function not implemented.');
        }}
      />
    </SafeAreaView>
  );
};

export default App;
