import {ISetAccessTokenAction} from '@interfaces/actions/authAction';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch} from '@store';
import axios from 'axios';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';

interface ISignUpActionParams {
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
  role?: boolean;
}

const api = axios.create({
  baseURL: 'https://nodejs-jira-pet-project.onrender.com/api',
  headers: {'Content-Type': 'application/json'},
});
const registerUser = async (email: string, password: string, name: string) => {
  try {
    console.log('registerPost');
    const response = await api.post('/users/registration', {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;
const nameRegex = /^[A-Za-z]{2,32}$/;

const messageUser = (message: string) => {
  Alert.alert('Validation Error', message);
};

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  'setAccessTokenAction',
);

export const signUpAction = createAsyncThunk(
  'signUpAction',
  async (params: ISignUpActionParams) => {
    if (!emailRegex.test(params.email)) {
      messageUser('Invalid email');
      return;
    }

    if (!passwordRegex.test(params.password)) {
      messageUser(
        'Invalid password. The password must contain letters and be between 8 and 32 characters long',
      );
      return;
    }

    if (params.password !== params.repeatPassword) {
      messageUser('Passwords do not match');
      return;
    }

    if (!nameRegex.test(params.name)) {
      messageUser('Name cannot be empty');
      return;
    }

    console.log('All validation passed');

    try {
      console.log('try');
      const response = await registerUser(
        params.email,
        params.password,
        params.name,
      );
      if (response?.data?.token) {
        const dispatch = useDispatch<AppDispatch>();
        dispatch(setAccessTokenAction(response.data.token));
      }
      console.log('User registered successfully:', response);
    } catch (error) {
      console.error('Error registering user:', error);
      messageUser('sdsds');
    }
  },
);
