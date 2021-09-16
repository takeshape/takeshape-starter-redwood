import { FatalErrorBoundary } from '@redwoodjs/web'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import './index.css'

const App = () => {
  const client = new ApolloClient({
    uri: process.env.TAKESHAPE_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
    },
  })

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodApolloProvider>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </RedwoodApolloProvider>
    </FatalErrorBoundary>
  )
}

export default App
