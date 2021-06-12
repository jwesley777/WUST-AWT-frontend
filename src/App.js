import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter,Switch, Link, Route, Redirect } from 'react-router-dom';
import { REVIEWS_HOME, REVIEWS_LOGIN, TICKETS_HOME, TICKETS_LOGIN } from './constants/routes'
import PrivateRoute from './helpers/PrivateRoute';
import ReviewsHome from './pages/reviews';
import TicketsHome from './pages/tickets';
import AuthenticationPage from './pages/login';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <BrowserRouter>
      <h2>
        <Link className="homeLink" to="/" style={{marginLeft: "-10px"}}>Home</Link>
        </h2>
        <Switch>
          <PrivateRoute service="reviews" path={REVIEWS_HOME} component={ReviewsHome}/>
          <PrivateRoute service="tickets" path={TICKETS_HOME} component={TicketsHome}/>
          <Route path={REVIEWS_LOGIN} component={AuthenticationPage}></Route>
          <Route path={TICKETS_LOGIN} component={AuthenticationPage}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
