import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('/api/users');
  return response.data;
};

const Users = () => {
  const { data, error, isLoading } = useQuery('users', fetchUsers);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <ul>
      {data.map((user: any) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
};

export default Users;