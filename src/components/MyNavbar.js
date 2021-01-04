import React, { useState, useEffect } from 'react'
import logo_w from './images/logo_w.png'
import { IoPersonOutline } from 'react-icons/io5'
import { IoCartOutline } from 'react-icons/io5'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  return (
    <>
      <header class="header">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="primary"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="#home">
            <img className="logo" src={logo_w} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/news">
                最新消息
              </Nav.Link>
              <Nav.Link as={NavLink} to="/motor">
                機車租賃
              </Nav.Link>
              <Nav.Link as={NavLink} to="/product">
                周邊商品
              </Nav.Link>
              <Nav.Link as={NavLink} to="/location">
                據點消息
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="/login">
                <IoPersonOutline size="18" color="#f5f5f5" />
                <span>登入</span>
              </Nav.Link>
              <Nav.Link eventKey={2} as={NavLink} to="/order">
                <IoCartOutline size="20" color="#f5f5f5" />
                <span>購物車</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  )
}

export default MyNavbar
