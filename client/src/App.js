import './App.css';
import React from 'react';
import TemplateForm from './components/templateForm';
import NavRecruit from './components/navRecruit';
import NavBar from './components/navBar';
import FreelanceProfile from './components/freelanceProfile';
import LogIn from './components/login'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, concat } from '@apollo/client';
import RecruiterProfile from './components/recruiterProfile';
import Signup from './components/signup';

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql'});

const authLink = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    console.log(operation.getContext())
    operation.setContext(({ headers = {} }) => (
      {
      headers: {
        ...headers,
        authorization: localStorage.getItem('id_token') || null,
      }
    }
    )); 
    console.log(operation.getContext())
    return forward(operation);
});

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/profile" element={<FreelanceProfile />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recruiter" element={<RecruiterProfile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
