import {createReducer} from '@reduxjs/toolkit';
import {IAuthReducerState} from '@interfaces/reducers/authReducer';
import {setAccessTokenAction} from '@actions/authAction';

const initialState: IAuthReducerState = {
  accessToken: undefined,
};

const authReducer = createReducer<IAuthReducerState>(initialState, builder =>
  builder.addCase(setAccessTokenAction, (store, {payload: {accessToken}}) => ({
    ...store,
    accessToken: accessToken,
  })),
);

export default authReducer;
