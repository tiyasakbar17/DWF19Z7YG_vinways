import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import React from "react";
import AddMusic from "./pages/AddMusic";
import AddArtist from "./pages/AddArtist";
import Transaction from "./pages/Transaction";
import { AppContextProvider } from "./Context/AppContext";
import LoginRoute from "./components/LoginRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Index from "./pages/Index";

function App() {
  return (
    <div className="Penampung">
      <AppContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <LoginRoute exact path="/" component={Index} />
            <LoginRoute exact path="/addmusic" component={AddMusic} />
            <LoginRoute exact path="/addartist" component={AddArtist} />
            <LoginRoute exact path="/transaction" component={Transaction} />
          </Switch>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
