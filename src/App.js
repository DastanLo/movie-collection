import React from 'react';
import MoviesPage from './containers/MoviesPage';
import {Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetailPage from './containers/MovieDetailPage';

const App = () => {
  return (
    <>
      <CssBaseline/>
      <Header/>
        <Switch>
          <Route path="/" exact component={MoviesPage}/>
          <Route path="/genre/:id" exact component={MoviesPage}/>
          <Route path="/movie/detail/:id" exact component={MovieDetailPage}/>
        </Switch>
      <Footer/>
    </>
  );
};

export default App;
