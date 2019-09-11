import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

const Navigation = () => (
    <ul>

        <NavLink exact activeClassName="active" to="/">
            <li>Home</li>
        </NavLink>


        <NavLink activeClassName="active" to="/users">
            <li>Users</li>
        </NavLink>


        <NavLink activeClassName="active" to="/products">
            <li>Products</li>
        </NavLink>

    </ul>
)

export default Navigation
