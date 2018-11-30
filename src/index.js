import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import './index.css';
import '../node_modules/graphiql/graphiql.css'

console.log(process.env.CIRCLECI_API_TOKEN)
var base64AuthValue = Buffer.from(process.env.CIRCLECI_API_TOKEN + ":").toString('base64');
console.log(base64AuthValue);


function graphQLFetcher(graphQLParams) {
	console.log(graphQLParams);
  return fetch('/graphql-unstable', {
    method: 'post',
    headers: { 'Content-Type': 'application/json','Authorization':'Basic NNEEEEED BASE^$ VALUE HERE' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}



ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.body);



