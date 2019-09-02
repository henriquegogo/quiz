import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Categories from './pages/Categories';
import Trivia from './pages/Trivia';
import Report from './pages/Report';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Router>
            <Route path='/' exact render={() => <Categories />} />
            <Route path='/trivia/:category' render={({ match }) => {
              const category = match.params.category;
              const cached_answers = window.localStorage.getItem('category_' + category);
              return cached_answers ? (<Redirect to={'/report/' + category} />) : (<Trivia category={category} />);
            }} />
            <Route path='/report/:category' render={({ match }) => {
              const category = match.params.category;
              return <Report category={category} />
            }} />
          </Router>
        </main>
      </Fragment>
    );
  }
}

export default App;
