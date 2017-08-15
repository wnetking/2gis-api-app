import React from 'react'
import {Link} from 'react-router-dom';
import CustomLink from './CustomLink'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import '../styles/menu.less'

const Menu = (props) => (
  <div>
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>Test</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <CustomLink activeOnlyWhenExact={true} to="/" label='Home'/>
          <CustomLink activeOnlyWhenExact={false} to="/about" label='About'/>
          {props.auth.login ?
            <CustomLink activeOnlyWhenExact={false} to="/logout" label='Logout'/>
            :
            <CustomLink activeOnlyWhenExact={false} to="/login" label='Login'/>
          }
          {props.auth.login ?
            <NavItem eventKey={1} style={{"float": "right"}}>{props.auth.user.name}</NavItem>
            :
            ''
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)


export default Menu;