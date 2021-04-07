/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Form, Profiles } from './styles';

interface IProfile {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
}

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  const [profiles, setProfiles] = useState<IProfile[]>(() => {
    const repoLC = localStorage.getItem('@ProfilesExplorer:profiles');
    if (repoLC) {
      return JSON.parse(repoLC);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@ProfilesExplorer:profiles',
      JSON.stringify(profiles),
    );
  }, [profiles]);

  function submitForm(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const profileSubmit: IProfile = {
      id: String(Math.random() * 10000).substring(0, 4),
      name,
      email,
      cpf,
      phone,
    };
    setProfiles([...profiles, profileSubmit]);
  }

  return (
    <>
      <h1>CADASTRAR</h1>

      <Form onSubmit={submitForm}>
        <div className="form-input">
          <label>Nome:</label>
          <input
            placeholder="Digite seu nome"
            value={name}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label>Email:</label>
          <input
            placeholder="Digite seu email"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label>CPF:</label>
          <input
            placeholder="Digite seu cpf"
            value={cpf}
            onChange={(e: any) => {
              setCpf(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <label>Telefone:</label>
          <input
            placeholder="Digite seu telefone"
            value={phone}
            onChange={(e: any) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className="form-input">
          <button type="submit">Cadastre</button>
        </div>
      </Form>

      <Profiles>
        {profiles.map((prof: IProfile, index: number) => (
          <li key={prof.id}>
            <Link to={`/profile/${index}`}>{prof.name}</Link>
          </li>
        ))}
      </Profiles>
    </>
  );
};

export default Home;
