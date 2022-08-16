import './App.css';
import React from 'react';
import TemplateForm from './components/templateForm';
import NavRecruit from './components/navRecruit';
import NavBar from './components/navBar';
import FreelanceProfile from './components/freelanceProfile';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, concat } from '@apollo/client';

// const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql'});
// const link = new ApolloLink((operation, forward) => {
//   return forward(operation)
// });

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  // link: concat(link, httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const { loading, error, data } = useQuery(GET_FREELANCERS);
  // console.log(data);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <FreelanceProfile />
      </div>
    </ApolloProvider>
  );
}

export default App;
