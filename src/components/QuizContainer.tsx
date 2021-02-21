import React from 'react';
import Quiz from './Quiz';
import FLAG_QUERY from './queries/queries'
const { useQuery } = require("@apollo/client");
global.fetch = require("node-fetch");


export default function QuizContainer() {
  const { loading, error, data } = useQuery(FLAG_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error with API</p>;

  return (
    <div>
      <h2>Alec's Flag Quiz 🤓</h2>
      <Quiz countries={data.countries}/>
    </div>
  );
}
