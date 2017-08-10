import React from 'react'
import {Route, Link } from 'react-router-dom';

const CustomLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <li className={match ? 'active list-group-item' : 'list-group-item'}>
            {match ? '>' : ''} <Link to={to}>{label}</Link>
        </li>
    )} />
)

export default CustomLink;