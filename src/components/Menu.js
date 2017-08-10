import React from 'react'
import CustomLink from './CustomLink'

const Menu = () => (
  <ul>
    <CustomLink activeOnlyWhenExact={true} to="/" label='Home' />
    <CustomLink activeOnlyWhenExact={false} to="/login" label='Login' />
    <CustomLink activeOnlyWhenExact={false} to="/about" label='About' />
  </ul>
)

export default Menu;