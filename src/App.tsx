import React from 'react';
import AppContainer from './AppContainer';
import store from '@store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default App;
