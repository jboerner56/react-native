import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $white: '#ffffff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGrey: '#ff00ff00',
  $darkText: '#343434',
});
// export default () => <Home />;
export default () => <CurrencyList />;
