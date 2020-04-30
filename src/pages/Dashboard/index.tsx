import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer"></img>
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/26724700?s=400&u=b0a596c8360675134b968ebfc129a6fae9296cb1&v=4"
            alt="Willa Kiane"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
              animi molestias quos quia aspernatur dolores libero! Deserunt,
              laudantium soluta!
            </p>
          </div>

          <FiChevronRight />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/26724700?s=400&u=b0a596c8360675134b968ebfc129a6fae9296cb1&v=4"
            alt="Willa Kiane"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
              animi molestias quos quia aspernatur dolores libero! Deserunt,
              laudantium soluta!
            </p>
          </div>

          <FiChevronRight />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/26724700?s=400&u=b0a596c8360675134b968ebfc129a6fae9296cb1&v=4"
            alt="Willa Kiane"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
              animi molestias quos quia aspernatur dolores libero! Deserunt,
              laudantium soluta!
            </p>
          </div>

          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
