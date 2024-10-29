import {EUserRole} from '@interfaces/general';

export interface ISetAccessTokenAction {
  accessToken: string | null;
}

export interface ISignUpAsyncAction {
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
  role: EUserRole;
}
