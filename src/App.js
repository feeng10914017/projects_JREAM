import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//排版用元件 全部都使用
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

//頁面元件
import Home from './pages/home/Home'
import News from './pages/news/News'
import Motor from './pages/motor/Motor'
import Product from './pages/product/Product'
import Location from './pages/location/Location'
import Member from './pages/member/Member'
import LogIn from './pages/member/Login'
import Order from './pages/order/Order'
function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/motor">
              <Motor />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/member">
              <Member />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
