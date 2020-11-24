import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import Store from './Redux/Store';


function App() {
  return (
    <div className="Penampung">
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Index} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
