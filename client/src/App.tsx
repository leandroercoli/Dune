import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "utils/PrivateRoute";
import Header from "components/header";
import Login from "screens/login";
import Home from "screens/home";
import Planets from "screens/planets";
import Contacts from "screens/contacts";

import "styles/global.scss";
import { useRouting } from "hooks/useRouting";
import { FullScreenLoader } from "components/loader";
import { useAuth } from "hooks/useAuth";

function ProtectedHome() {
  const {
    loggedUser: { isLoading: isAuthLoading },
  } = useAuth();

  return (
    <div className="container">
      <Header />
      <div className="content">
        {isAuthLoading && <FullScreenLoader />}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/planets">
          <Planets />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </div>
    </div>
  );
}

function App() {
  useRouting();
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/*/:serialNumber">
        <ProtectedHome />
      </PrivateRoute>
      <PrivateRoute path="/">
        <ProtectedHome />
      </PrivateRoute>
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default App;
