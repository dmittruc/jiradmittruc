import {EUserRole} from '@interfaces/general';
import axiosInstance from '../axios';

export const registerUserApi = async (
  email: string,
  password: string,
  name: string,
  role: EUserRole,
) => {
  console.log('registerPost');
  const response = await axiosInstance.post('/users/registration', {
    email,
    password,
    name,
    role,
  });
  return response.data;
};
