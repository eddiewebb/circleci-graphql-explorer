# CircleCI Interactive Query Explorer (graphiql)

[![CircleCI](https://circleci.com/gh/eddiewebb/circleci-graphql-explorer/tree/master.svg?style=svg)](https://circleci.com/gh/eddiewebb/circleci-graphql-explorer/tree/master)

## Usage

This react/node app wraps our graphql endpoint with built-in introspection and auto-completion.

This makes it easy to explore the objects, arguments, and fields

![Gif showing the autocomplete querying](/assets/self.query)



## Available Scripts

In the project directory, you can run:

### `yarn install`

Its the first thing you need to do after cloning, but only once.  If you get "yarn not found", then

`npm install --global yarn` then run yarn install once complete.

If you don't have nodejs/npm, install via Homebrew.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The app expects a local Environment Variable named `CIRCLECI_API_TOKEN`. If not present, the app will show input asking for the value.

### Learn GraphQL (for CircleCI API)

See https://github.com/eddiewebb/jupyter-notes/blob/master/GraphQL/Plan%20Metrics.ipynb for a wallthrough starting with 

> “What even are the things I can query?”  
to 
> “Hooray, credit consumption by project and date for an org”
