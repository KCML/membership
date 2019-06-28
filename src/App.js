import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ManagementPage from './pages/ManagementPage';
import Page404 from './pages/Page404';
import LandingPage from './pages/LandingPage';
import ForgetPassword from './pages/ForgetPasswordPage';

// import BaseModal from './components/BaseModal';
const App = () =>{
  return (
    <BrowserRouter>
      <TopNavBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/management" exact component={ManagementPage}/>
        <Route path="/forget" exact component={ForgetPassword}/>
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
    // <EntryPage />
    // <ManagementPage />
    // <BaseModal />
  );
}

export default App;
