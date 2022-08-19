import './App.css';
import FreelanceProfile from './pages/freelanceProfile';
import FreelanceHighlight from './pages/freelanceHighlight';
import Signin from './pages/Signin'
import RecruiterForm from './components/recruiterForm';
import LandingPage from './pages/LandingPage';
import RecruiterProfile from './pages/recruiterProfile';
import Signup from './pages/Signup';
import NavBar from './components/navBar';
import FreelancerForm from './components/FreelancerForm';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink, concat } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql'});
const authLink = new ApolloLink((operation, forward) => {
    // add the authorization to the headers=
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
//routes
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/profile" element={<FreelanceProfile />} />
            <Route path="/recruiter" element={<RecruiterProfile />} />
            <Route path="/highlight" element={ <FreelanceHighlight /> } />
            <Route path="/recruiterForm" element={<RecruiterForm />} />
            <Route path="/freelancerForm" element={<FreelancerForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
