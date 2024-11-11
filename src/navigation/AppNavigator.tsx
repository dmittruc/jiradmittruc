import React from 'react';
import {ERoutesNames} from '@interfaces/navigation/routeNames';
import {AppStackParamList} from '@interfaces/navigation/routeParams';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultScreenOptions} from './constants';
import ProjectsScreen from '@screens/ProjectsScreen ';
import ProjectCreatorScreen from '@screens/ProjectCreatorScreen';
import SignUpScreen from '@screens/SignUpScreen';
import SignInScreen from '@screens/SignInScreen';

const AppStack = createNativeStackNavigator<AppStackParamList>();
const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={defaultScreenOptions}>
      <AppStack.Screen
        name={ERoutesNames.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
      <AppStack.Screen
        name={ERoutesNames.PROJECTS_SCREEN}
        component={ProjectsScreen}
      />
      <AppStack.Screen
        name={ERoutesNames.CREATE_PROJECT_SCREEN}
        component={ProjectCreatorScreen}
      />
      <AppStack.Screen
        name={ERoutesNames.SIGN_IN_SCREEN}
        component={SignInScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
