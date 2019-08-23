import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';
import {BrowserRouter,Route,Switch} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <TopNavbar/> 
        <BottomNavbar/>
        <Switch>
          <Route  exact path="/" component={MainPage}/>
          <Route  exact path="/products" component={Products}/>
          <Route component={NotFound}/>

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
