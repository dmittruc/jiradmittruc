import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {IAuthReducerState} from '@interfaces/reducers/authReducer';
import {setAccessTokenAction} from '@actions/authAction';

const initialState: IAuthReducerState = {
  accessToken: null,
};

const authReducer = createReducer<IAuthReducerState>(initialState, builder =>
  builder.addCase(
    setAccessTokenAction,
    (store, action: PayloadAction<string>) => {
      return {
        ...store,
        accessToken: action.payload,
      };
    },
  ),
);

export default authReducer;
