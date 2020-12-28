import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import React from "react";
import AddMusic from "./pages/AddMusic";
import AddArtist from "./pages/AddArtist";
import Transaction from "./pages/Transaction";
import { AppContextProvider } from "./Context/AppContext";
import LoginRoute from "./components/RouterLogin/LoginRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Index from "./pages/Index";
import SetAuthToken from "./Context/SetAuthToken";

import Store from "./Redux/Store";
import { Provider } from "react-redux";
import { loadData } from "./Redux/Actions/AuthActions";
import DetailArtist from "./pages/DetailArtist";

function App() {
  if (localStorage.getItem("token")) {
    SetAuthToken(localStorage.getItem("token"));
  }
  React.useEffect(() => {
    Store.dispatch(loadData());
  }, []);

  return (
    <Provider store={Store}>
      <div className="Penampung">
        <AppContextProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <LoginRoute exact path="/" role={2} component={Index} />
              <LoginRoute
                exact
                path="/addmusic"
                role={1}
                component={AddMusic}
              />
              <LoginRoute
                exact
                path="/addartist"
                role={1}
                component={AddArtist}
              />
              <LoginRoute
                exact
                path="/transaction"
                role={1}
                component={Transaction}
              />
              <LoginRoute
                path="/artist/:id"
                role={2}
                component={DetailArtist}
              />
              <Route component={Login} />
            </Switch>
          </BrowserRouter>
        </AppContextProvider>
      </div>
    </Provider>
  );
}

export default App;
