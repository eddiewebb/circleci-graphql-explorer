# CircleCI Interactive Query Explorer (graphiql)

## Usage

This react/node app wraps our graphql endpoint with built-in introspection and auto-completion.

This makes it easy to explore the objects, arguments, and fields

![Gif showing the autocomplete querying](/assets/self.query)



## Available Scripts

In the project directory, you can run:

### `yarn install`

Its the first thing you need to do after cloning, but only once.

### `REACT_APP_SECRET=${CIRCLECI_API_TOKEN} yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you omit the secret you will only see an input asking for the value.

### Learn GraphQL (for CircleCI API)

See https://github.com/eddiewebb/jupyter-notes/blob/master/GraphQL/Plan%20Metrics.ipynb for a wallthrough starting with 

> “What even are the things I can query?”  
to 
> “Hooray, credit consumption by project and date for an org”
