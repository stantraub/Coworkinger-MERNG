import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import { AuthProvider } from './context/auth'
import AuthRoute from './util/authRoute'

import Main from './pages/main/Main'
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from './components/nav/navbar'
import SpacesContainer from './pages/space_index_container'
import SpaceShowContainer from './components/spaces/space_show_container'

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Route exact path="/" component={Main} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <Route exact path="/spaces" component={SpacesContainer} />
        <Route exact path="/spaces/:id" component={SpaceShowContainer} />
      </Router>
    </AuthProvider>
  );
}

export default App;
