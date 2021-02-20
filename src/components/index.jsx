import React from 'react';
import Quiz from './quiz';
import FLAG_QUERY from './queries/queries'
const { useQuery } = require("@apollo/client");
global.fetch = require("node-fetch");


export default function Flags() {
  const { loading, error, data } = useQuery(FLAG_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error with API</p>;

  return (
    <div>
      <Quiz countries={data.countries}/>
    </div>
  );
}
