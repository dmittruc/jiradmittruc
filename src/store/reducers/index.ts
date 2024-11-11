import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import authReducer from './authReducer';
import projectReducer from './projectsReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'projects', 'tasks', 'statuses', 'types', 'users'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
});

export default persistReducer(PersistConfig, rootReducer);
