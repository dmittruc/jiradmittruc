import {IProject} from '@interfaces/index';

export interface IProjectsReducerState {
  projects: IProject[];
  error: any;
  loading: boolean;
}
