import {
  createProjectAsyncAction,
  fetchProjectsAsyncAction,
} from '@actions/projectsAction';
import {IProject} from '@interfaces/index';
import {TAppDispatch, TRootState} from '@store';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useProjects = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const projects = useSelector<TRootState, IProject[]>(
    (state: TRootState) => state.projects.projects,
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.projects.error,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.projects.loading,
  );

  const fetchProjects = React.useCallback(() => {
    dispatch(fetchProjectsAsyncAction());
  }, []);

  const createProject = React.useCallback(
    (title: string, description: string, onSuccess?: () => void) => {
      dispatch(
        createProjectAsyncAction({
          title: title,
          description: description,
          onSuccess: onSuccess,
        }),
      );
    },
    [],
  );

  return {
    projects,
    error,
    loading,
    fetchProjects,
    createProject,
  };
};

export default useProjects;
