import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'
import Product from './Views/Product'
function App() {
  return (
    <div>
      <Router>
      <Header />
      
      <HelloWorld name = "Jared"/>
      
      
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path = "/contact">
            <Contact />
          </Route>
          <Route exact path = "/products/:id">
            <Product />
          </Route>
        </Switch>

      
      <Footer />
      </Router>
    </div>
    
  );
}

export default App;
