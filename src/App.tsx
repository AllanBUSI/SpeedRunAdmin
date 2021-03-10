  
//import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Pub from './pages/Pub'
import Simple from './pages/Simple'
import Avancer from './pages/Avancer'
import Utilisateur from './pages/Utilisateur'
import Coach from './pages/Coach'
import Admin from './pages/Administrateur'
import Profil from './pages/Profil'
import User from './pages/User'
import GetCoach from './pages/GetCoach'
import Validate from './pages/Validate'
import history from './history';


function App() {
  return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Login.Display} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/pub' component={Pub} />
            <Route exact path='/simple' component={Simple} />
            <Route exact path='/avancer' component={Avancer} />
            <Route exact path='/utilisateur' component={Utilisateur} />
            <Route exact path='/coach' component={Coach} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/profil' component={Profil} />
            <Route exact path='/user' component={User} />
            <Route exact path='/voir' component={GetCoach} />
            <Route exact path='/validate' component={Validate} />
            {/* <Route exact path='/reinitialiser-mot-de-passe/:str' component={Reinitialiser.Display} /> */}
            {/* ROUTES NECESSITANT D'ETRE CONNECTE
            <ProtectedRoute exact path='/tableau-de-bord' component={Dashboard.Display} />
            <ProtectedRoute exact path='/tableau-de-bord/:file' component={ShowFile.Display} />
            <ProtectedRoute exact path='/profil' component={ModifierProfil.Display} /> */}
          </Switch>
        </Router>
    </div>
   
  );
}

export default App;
