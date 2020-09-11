import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Error from './components/Errror/Error';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Manage from './components/manage/Manage';

function App() {
  return (
    <div>
       <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
              <ProductDetail></ProductDetail>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route path="*">
              <Error></Error>
          </Route>
        </Switch>
      </Router>


      
    </div>
  );
}

export default App;
