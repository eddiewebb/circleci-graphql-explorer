import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import './index.css';
import '../node_modules/graphiql/graphiql.css'



function graphQLFetcher(graphQLParams) {
	console.log(graphQLParams);
  return fetch('/graphql-unstable', {
    method: 'post',
    headers: { 'Content-Type': 'application/json','Authorization': process.env.REACT_APP_SECRET },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}



ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} defaultQuery={'{ __schema { types { name } }}'} />, document.body);



