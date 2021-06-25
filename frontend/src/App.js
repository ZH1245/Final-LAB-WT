import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddMatch from "./components/AddMatch";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRouteAdmin path="/addMatch" component={AddMatch} />

        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
