import React from 'react';
import {ERoutesNames} from '@interfaces/navigation/routeNames';
import {AppStackParamList} from '@interfaces/navigation/routeParams';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppScreen from '@screens/AppScreen';
import {defaultScreenOptions} from './constants';

const AppStack = createNativeStackNavigator<AppStackParamList>();
const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={defaultScreenOptions}>
      <AppStack.Screen name={ERoutesNames.APP_SCREEN} component={AppScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
