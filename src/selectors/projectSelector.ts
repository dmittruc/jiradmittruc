import {IProject} from '@interfaces/index';
import {TRootState} from '@store';
import {createSelector} from 'reselect';

const projectsSelector = (state: TRootState) => state.projects.projects;

export const projectInfoSelector = (projectId: number) =>
  createSelector([projectsSelector], (projects: IProject[]) =>
    projects.find((project: IProject) => project.id == projectId),
  );
