import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        return repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('./repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.HomeContainer>
    <S.h1>GitHub Repositories</S.h1>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="enter your username" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Research</S.Button>
      </S.Content>
      { erro ? <S.ErrorMgs>User not found. Try again.</S.ErrorMgs> : '' }
    </S.HomeContainer>
  );
}

export default App;

// JSX é um HTML dentro do JS.