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
          console.log('Card tokenized', e);
        }}
        cardTokenizationFailed={function (
          e: FrameCardTokenizationFailedEvent,
        ): void {
          console.log('Card tokenization failed', e);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
