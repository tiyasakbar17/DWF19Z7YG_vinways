import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import React from "react";
import Data from "./API/Data.json";
import AddMusic from "./pages/AddMusic";
import AddArtist from "./pages/AddArtist";
import Transaction from "./pages/Transaction";
import { AppContextProvider } from "./Context/AppContext";
import LoginRoute from "./components/LoginRoute";

function App() {
  const innitialValue = Data;

  const [data, setData] = React.useState(innitialValue);

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
