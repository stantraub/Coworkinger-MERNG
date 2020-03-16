import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Main from './pages/main/Main'
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from './components/nav/navbar'
import SpacesContainer from './components/spaces/space_index_container'
function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Main} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/spaces" component={SpacesContainer} />
    </Router>
  );
}

export default App;
