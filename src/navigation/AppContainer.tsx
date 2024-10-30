import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {TRootState} from '@store';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const AppContainer = () => {
  const accessToken = useSelector<TRootState, string | undefined>(
    state => state.auth.accessToken,
  );
  console.log('accestokenhere=>', accessToken);

  return (
    <NavigationContainer>
      {!accessToken ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default AppContainer;
