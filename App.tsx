import React from 'react';
import {SafeAreaView} from 'react-native';

import {CardScreen} from './src/CardScreen/CardScreen';
import {
  FrameCardTokenizationFailedEvent,
  FrameCardTokenizedEvent,
} from './src/CardScreen/types/types';
import {PUBLIC_KEY} from './src/utils/constants';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <CardScreen
        checkoutKey={PUBLIC_KEY}
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
