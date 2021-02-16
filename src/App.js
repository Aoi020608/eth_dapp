import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import ForCreator from './pages/ForCreator';
import ForBuyer from './pages/ForBuyer';
import AboutUs from './pages/AboutUs';

//import components
import Nav from './components/Nav';
import GlobalStyle from './components/GlobalStyle';

function App() {

  const location = useLocation();



  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/creator" exact>
          <ForCreator />
        </Route>
        <Route path="/buyer">
          <ForBuyer />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
