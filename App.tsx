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
        cardTokenized={function (e: FrameCardTokenizedEvent): void {
          throw new Error('Function not implemented.');
        }}
        cardTokenizationFailed={function (
          e: FrameCardTokenizationFailedEvent,
        ): void {
          throw new Error('Function not implemented.');
        }}
        tokenizeCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </SafeAreaView>
  );
};

export default App;
