import React from 'react';
import {ERoutesNames} from '@interfaces/navigation/routeNames';
import {AuthStackParamList} from '@interfaces/navigation/routeParams';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '@screens/SignUpScreen';
import {defaultScreenOptions} from './constants';
import SignInScreen from '@screens/SignInScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={defaultScreenOptions}>
      <AuthStack.Screen
        name={ERoutesNames.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
      <AuthStack.Screen
        name={ERoutesNames.SIGN_IN_SCREEN}
        component={SignInScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
