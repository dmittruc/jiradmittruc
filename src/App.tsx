import React from 'react';
import {Provider} from 'react-redux';
import store from '@store';
import {AppContainer} from './navigation/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{flex: 1}}>
        <AppContainer />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
