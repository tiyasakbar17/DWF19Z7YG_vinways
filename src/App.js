import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import React from 'react'
import Data from './API/Data.json'

function App() {
  const innitialValue = Data

  const [data, setData] = React.useState(innitialValue)

  return (
    <div className="Penampung">
        <BrowserRouter>
          <Header data={data} setData={setData.bind()} />
          <Switch>
            <Route exact path="/register" component={() => <Register data={data} setData={setData.bind()} />} />
            <Route exact path="/login" component={() => <Login data={data} setData={setData.bind()} />} />
            <Route exact path="/" component={() => <Index data={data} setData={setData.bind()} />} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
