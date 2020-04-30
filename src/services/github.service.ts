import api from './api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const params = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
};

export const getRepositories = async (repo: string): Promise<Repository> => {
  const { data: repository } = await api.get<Repository>(`repos/${repo}`, {
    params,
  });

  return repository;
};

export const getIssues = async (repo: string) => {
  const response = await api.get(`/repos/${repo}`, { params });

  return response.data;
};

export const getRepository = async (repo: string) => {
  const reponse = await api.get(`/repos/${repo}/issues`, { params });

  return reponse.data;
};
