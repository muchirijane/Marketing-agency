import React from 'react';
import GlobalStyles from './GlobalStyles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar, Footer} from './components';
import Home from './pages/Home/Home';
import Services from './pages/Services/Service';
import Products from './pages/Products/Product';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path ='/' exact component={Home}/>
        <Route path ='/services' component={Services}/>
        <Route path ='/products' component={Products}/>
        <Route path ='/sign-up' component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
