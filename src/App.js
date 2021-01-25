import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer.js'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Account from './components/layout/Account';
import CreateProject from './components/projects/CreateProject';
import EditProject from './components/projects/EditProject';
import ForgotPassword from './components/auth/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <header>
      <Navbar />
      </header>
      <main className="App">
        <Switch>
          <Route exact path='/' component={ Dashboard }></Route>
          <Route path='/project/:id' component={ ProjectDetails }></Route>
          <Route path='/editProject/:id' component={ EditProject }></Route>
          <Route path='/signin' component={ SignIn }></Route>
          <Route path='/signup' component={ SignUp }></Route>
          <Route path='/create' component={ CreateProject }></Route>
          <Route path='/account' component={ Account }></Route>
          <Route path='/resetPassword' component={ ForgotPassword }></Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

