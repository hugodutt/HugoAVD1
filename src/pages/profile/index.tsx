import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

interface RepoParams {
  id: string;
}

interface IProfile {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
}

const Profile: React.FC = () => {
  const { params } = useRouteMatch<RepoParams>();

  const [profiles, setProfiles] = useState<IProfile[]>(() => {
    const repoLC = localStorage.getItem('@ProfilesExplorer:profiles');
    if (repoLC) {
      return JSON.parse(repoLC);
    }
    return [];
  });

  const profile: IProfile = profiles[Number(params.id)];

  return (
    <>
      <Link to="/">Voltar</Link>
      <h1> Sobre: {profile.name}</h1>
      <p>Email: {profile.email}</p>
      <p>CPF: {profile.cpf}</p>
      <p>Telefone: {profile.phone}</p>
    </>
  );
};

export default Profile;
