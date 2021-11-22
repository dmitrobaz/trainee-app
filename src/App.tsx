import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Registration, Login, Main } from './pages';



const App: React.FC = () => {

  // STATETS===================================

  const [redirectToLogin, setRedirectToLogin] = useState<boolean>(false)
  const [redirectToMain, setRedirectToMain] = useState<boolean>(false)


  // PURE_FUNCTIONS============================

  const WrappedRegistration = (props: any) => (<Registration {...props} setRedirect={setRedirectToLogin} />)
  const WrappedLogin = (props: any) => (<Login {...props} setRedirect={setRedirectToMain} />)

  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route path="/" component={Main} exact />

          {redirectToMain
            ? <Redirect strict from="/login" to="/" />
            : <Route path="/login" component={WrappedLogin} exact />}
          {redirectToLogin
            ? <Redirect strict from="/registration" to="/login" />
            : <Route path="/registration" component={WrappedRegistration} exact />}

            
          {/* <Route path="/login" component={Login} exact />
          <Route path="/registration" component={Registration} exact /> */}


        </Switch>
      </div>
    </div>
  );
}

export default App;
