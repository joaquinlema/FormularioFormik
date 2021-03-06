import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Grid container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </Grid>
      </Router>
    </Provider>
  );
}

export default App;
