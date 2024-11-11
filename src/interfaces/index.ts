export type TUserRole = 'ADMIN' | 'USER';

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: TUserRole;
  avatar?: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  tasksCount: number;
  users: IUser[];
}
