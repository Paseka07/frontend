import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';

import AdminRoute from './components/AdminRoute';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen'
import ProductEditScreen from './screens/ItemEditScreen'
import ItemListScreen from './screens/ItemListScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin)
  const {userInfo} = userSignin;

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
  <BrowserRouter>
  <div className="grid-container">
  <header className="header">
    <div className="brand">
      <button onClick={openMenu}>
        &#9776;
      </button>
      <Link to='/'>Samson School Suppliers</Link>
      </div>
    <div className="header-links">
      <a href="cart.html">Cart</a>
      {
        userInfo ? <Link to="/profile">{userInfo.name}</Link> :
        <Link to='/signin'>Sign In</Link>
      }
      </div>
  </header>
  <aside className="sidebar">
    <h3>Shopping Categories</h3>
    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
    <ul>
      <li>
        <a href="index.html">Winter</a>
      </li>

      <li>
        <a href="index.html">Summer</a>
      </li>

      <li>
        <a href="index.html">Sports</a>
      </li>

      <li>
        <a href="index.html">Other</a>
      </li>

    </ul>
  </aside>
  <main className="main">
    <div className="content">
      <Route path="/products" component={ProductsScreen} />
      <Route path="/signin" component={SigninScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/item/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/" exact={true} component={HomeScreen} />
      <Route path="/item/:id/edit" component={ProductEditScreen} exact></Route>
      <AdminRoute
      path="/itemlist"
      component={ItemListScreen}
      exact
      ></AdminRoute>
      </div>

  </main>
  <footer className="footer">
    All right reserved.
  </footer>
</div>
</BrowserRouter>
  );
}

export default App;
