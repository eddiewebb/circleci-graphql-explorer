import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import './index.css';
import '../node_modules/graphiql/graphiql.css'


class AskForToken extends React.Component {
  handleClick() {
    token = document.getElementById('token_input').value
    url = document.getElementById('url_input').value
  	render()
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
    	<>
      <div class="page">
  <div class="container">
    <div class="left">
      <div class="login">Read This</div>
      <div class="eula"> 
        <p>
         Cross-Origin-Resource-Sharing (CORS) rules written into your browser will not allow this domain (localhost or github.io) to call CirceCI.com domain.
        </p>
        <ul>
          <li>If running locally, you can just remove the domain and node will proxy /graphql-unstable --> circleci.</li>
          <li>If running on GitHub.io, you must disable Cross-Origin-Resource-Sharing, and should google more info and risks. 
          <pre>open -a Google\ Chrome --args \<br/>
          --disable-web-security \<br />
          --user-data-dir=""</pre></li>
        </ul>
         <p>In any case, this static JS based application needs your API Token to connect with CircleCI.</p>
      </div>
    </div>
    <div class="right">
      
      <div class="form">
        <label for="circleci_api_token">Token</label>
        <input id="token_input" type="password" name="circleci_api_token" defaultValue={ token } /><br/>
       
        <label for="circleci_api_token"> GQL Endpoint</label>
        <input id="url_input" type="input" name="url" defaultValue="https://circleci.com/graphql-unstable" />
        <button onClick={(e) => this.handleClick(e)}>
          Load IDE
        </button>
      </div>
    </div>
  </div>
</div>
        
	      </>
    );
  }
}

var selfQuery = `
# me is a reserved keyword for active user.
{ 
	me{
    id
    # avatar url uses GitHub userID 
    avatarURL
    name
    accounts{
      # should == orgs in picker
      totalCount
      # can get account IDs through edges
      # try it out!
    }
  }
}
`

function graphQLFetcher(graphQLParams) {
   return fetch(url, {
     method: 'post',
     headers: { 'Content-Type': 'application/json','Authorization': token },
     body: JSON.stringify(graphQLParams),
   }).then(response => response.json());

}

function render(){
	ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} defaultQuery={selfQuery} />, document.getElementById('iql'));
}







var token = process.env.REACT_APP_SECRET;
var url = "";
ReactDOM.render(<AskForToken />,document.getElementById('iql'))




