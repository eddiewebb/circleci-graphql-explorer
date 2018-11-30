import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import './index.css';
import '../node_modules/graphiql/graphiql.css'


class AskForToken extends React.Component {
  handleClick() {
    console.log('this is:', this);

	token = document.getElementById('token_input').value
	render()
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
    	<>
		<p>This JS based application needs your API Token to connect with CircleCI.</p>
		CircleCI API Token:
		<input id="token_input" type="password" name="circleci_api_token" />
	      <button onClick={(e) => this.handleClick(e)}>
	        Click me
	      </button>
	      </>
    );
  }
}



function graphQLFetcher(graphQLParams) {
  return fetch('/graphql-unstable', {
    method: 'post',
    headers: { 'Content-Type': 'application/json','Authorization': token },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

function render(){
	ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} defaultQuery={'{ __schema { types { name } }}'} />, document.getElementById('iql'));
}







var token = process.env.REACT_APP_SECRETs;

if(token){
	render();
}else{
	ReactDOM.render(<AskForToken />,document.getElementById('iql'))
}



