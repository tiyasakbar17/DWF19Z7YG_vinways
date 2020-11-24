import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Register from './pages/Register';


function App() {
  return (
    <div className="Penampung">
      <Header />
      <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
