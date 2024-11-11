import axiosInstance from './axios';

export const fetchProjectsApi = async () => {
  console.log('try get projects');
  const res = await axiosInstance.get('/projects', {});
  return res.data;
};

export const createProjectApi = async (title: string, description: string) => {
  console.log('create project post');
  const res = await axiosInstance.post('/projects', {
    title: title,
    description: description,
  });
  return res.data;
};
