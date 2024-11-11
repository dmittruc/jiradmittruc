import {TUserRole} from '@interfaces/index';
import axiosInstance from './axios';

export const signInApi = async (email: string, password: string) => {
  console.log('sign in post');
  const res = await axiosInstance.post('/users/login', {
    email: email,
    password: password,
  });
  return res.data;
};

export const signUpApi = async (
  email: string,
  password: string,
  name: string,
  role: TUserRole,
) => {
  console.log('sign up post');
  const res = await axiosInstance.post('/users/registration', {
    email,
    password,
    name,
    role,
  });
  return res.data;
};
