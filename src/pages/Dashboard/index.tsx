import React, { useState, useEffect, FormEvent } from 'react';

import api from '../../services/api';

import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  fullname: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      const { data: repository } = await api.get<Repository>(
        `repos/${newRepo}`,
      );

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer"></img>
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.fullname} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.fullname}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
