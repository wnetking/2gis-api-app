import React from 'react'
import {Link} from 'react-router-dom';
import CustomLink from './CustomLink'
import { Navbar, Nav } from 'react-bootstrap'
import '../styles/menu.less'

const Menu = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Test</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <CustomLink activeOnlyWhenExact={true} to="/" label='Home' />
        <CustomLink activeOnlyWhenExact={false} to="/login" label='Login' />
        <CustomLink activeOnlyWhenExact={false} to="/about" label='About' />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Menu;