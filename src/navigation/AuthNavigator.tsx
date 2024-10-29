import React from 'react';
import {ERoutesNames} from '@interfaces/navigation/routeNames';
import {AuthStackParamList} from '@interfaces/navigation/routeParams';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '@screens/SignUpScreen';
import {defaultScreenOptions} from './constants';

const AuthSTack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthSTack.Navigator screenOptions={defaultScreenOptions}>
      <AuthSTack.Screen
        name={ERoutesNames.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
    </AuthSTack.Navigator>
  );
};

export default AuthNavigator;
