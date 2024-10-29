import {registerUserApi} from '@api/auth';
import {
  ISetAccessTokenAction,
  ISignUpAsyncAction,
} from '@interfaces/actions/authAction';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;
const nameRegex = /^[A-Za-z]{2,32}$/;

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  'setAccessTokenAction',
);

export const signUpAsyncAction = createAsyncThunk(
  'signUpAsyncAction',
  async (
    {email, password, repeatPassword, name, role}: ISignUpAsyncAction,
    {dispatch},
  ) => {
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid email');
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Invalid password. The password must contain letters and be between 8 and 32 characters long',
      );
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    if (!nameRegex.test(name)) {
      Alert.alert('Name cannot be empty');
      return;
    }

    console.log('All validation passed');

    try {
      console.log('try');
      const response = await registerUserApi(email, password, name, role);
      console.log('RES =>', response?.token);
      if (response.token) {
        console.log('Token received:', response?.token);
        dispatch(setAccessTokenAction(response?.token));
      }
      console.log('User registered successfully:', response);
    } catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Registration failed');
    }
  },
);
