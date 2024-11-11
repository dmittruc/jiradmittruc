import {
  addProjectAction,
  setErrorAction,
  setLoadingAction,
  setProjectsAction,
} from '@actions/projectsAction';
import {IProjectsReducerState} from '@interfaces/reducers/projectsReducer';
import {createReducer} from '@reduxjs/toolkit';

const initialState: IProjectsReducerState = {
  projects: [],
  error: undefined,
  loading: false,
};

const projectReducer = createReducer<IProjectsReducerState>(
  initialState,
  builder =>
    builder
      .addCase(setProjectsAction, (store, {payload: {projects}}) => ({
        ...store,
        projects: projects,
      }))
      .addCase(addProjectAction, (store, {payload: {project}}) => ({
        ...store,
        projects: [...store.projects, project],
      }))
      .addCase(setErrorAction, (store, {payload: {error}}) => ({
        ...store,
        error: error,
      }))
      .addCase(setLoadingAction, (store, {payload: {loading}}) => ({
        ...store,
        loading: loading,
      })),
);

export default projectReducer;
