import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import React from 'react'

function App() {
  const innitialValue = {
    users: [{
      id: 1,
      email: "tiyas.akbar@gmail.com",
      password: "dumbways.id",
      name: "Muhammad Tiyas Fachreza Akbar"
    }],
    songs: [{
      id: 1,
      title: "Circles",
      singer: "Post Malone",
      img: '',
      year: 2019
    },
    {
      id: 2,
      title: "Logic",
      singer: "Kearu Reaces",
      img: '',
      year: 2019
    },
    {
      id: 3,
      title: "Godzilla",
      singer: "Eminem",
      img: '',
      year: 2020
    },
    {
      id: 4,
      title: "Midsummer",
      singer: "88rising",
      img: '',
      year: 2018
    },
    {
      id: 5,
      title: "History",
      singer: "Rich Brian",
      img: '',
      year: 2018
    },
    {
      id: 6,
      title: "I LIKE U",
      singer: "Niki",
      img: '',
      year: 2017
    },
    {
      id: 7,
      title: "Love Galore",
      singer: "SZA",
      img: '',
      year: 2017
    }],
    isLogin: false,
    loginData:{}
  }

  const [data, setData] = React.useState(innitialValue)

  return (
    <div className="Penampung">
        <BrowserRouter>
          <Header />
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
