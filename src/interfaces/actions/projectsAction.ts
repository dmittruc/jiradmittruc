import {IProject} from '@interfaces/index';

export interface ISetProjectsAction {
  projects: IProject[];
}
export interface IAddProjectAction {
  project: IProject;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface ICreateProjectAsyncAction {
  title: string;
  description: string;
  onSuccess?: () => void;
}
