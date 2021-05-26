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

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/reviews">Review Service</Link>
              <Link to="/tickets">Tickets Service</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute service="reviews" path={REVIEWS_HOME} component={ReviewsHome}/>
          <PrivateRoute service="tickets" path={TICKETS_HOME} component={TicketsHome}/>
          <Route path={REVIEWS_LOGIN} component={AuthenticationPage}></Route>
          <Route path={TICKETS_LOGIN} component={AuthenticationPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
