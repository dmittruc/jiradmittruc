import {signInApi, signUpApi} from '@api/auth';
import {
  ISetAccessTokenAction,
  ISetLoadingAction,
} from '@interfaces/actions/authAction';
import {TUserRole} from '@interfaces/general';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

export interface ISignInParams {
  email: string;
  password: string;
}

export interface ISignUpParams {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
  role: TUserRole;
  onSuccess: () => void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;
const nameRegex = /^[A-Za-z]{2,32}$/;

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  'auth/setAccessTokenAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'auth/setLoadingAction',
);

export const signInAsyncAction = createAsyncThunk(
  'auth/signInAsyncAction',
  async ({email, password}: ISignInParams, {getState, dispatch}) => {
    try {
      console.log('try sign in post');
      dispatch(setLoadingAction({loading: true}));
      const res = await signInApi(email, password);
      if (res.token) {
        dispatch(setAccessTokenAction({accessToken: res.token}));
      }
      console.log({token: res.token});
    } catch (e: any) {
      console.error('Error registering user:', e);
      Alert.alert('Sign in failed');
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);

export const signUpAsyncAction = createAsyncThunk(
  'auth/signUpAsyncAction',
  async (
    {email, name, password, repeatPassword, role, onSuccess}: ISignUpParams,
    {getState, dispatch},
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
      console.log('try sign up post');
      const res = await signUpApi(email, password, name, role);
      if (res.token) {
        dispatch(setAccessTokenAction({accessToken: res.token}));
      }
      console.log({token: res.token});
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.error('Error registering user:', e);
      Alert.alert('Sign up failed');
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);
