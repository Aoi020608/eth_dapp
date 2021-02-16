import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import ForCreator from './pages/ForCreator';

//import components
import Nav from './components/Nav';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/creator" exact>
          <ForCreator />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
