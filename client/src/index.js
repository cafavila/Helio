import React from 'react'
import ReactDOM from 'react-dom'
import {split} from 'apollo-link'
import {BrowserRouter} from 'react-router-dom'
import {ApolloClient} from 'apollo-client'
import {ApolloProvider} from 'react-apollo'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {createHttpLink} from 'apollo-link-http'
import App from './containers/App'
import registerServiceWorker from './utils/registerServiceWorker'

console.log('[HELIUM] - Server is STARTING');
console.log('[HELIUM] - Server is RUNNING');

const httpLink = createHttpLink({uri: 'http://localhost:4000'})
const client = new ApolloClient({link: httpLink, cache: new InMemoryCache()})
ReactDOM.render(<BrowserRouter>
      <ApolloProvider client={client}><App /></ApolloProvider>
  </BrowserRouter>, document.getElementById('app'))
registerServiceWorker()
