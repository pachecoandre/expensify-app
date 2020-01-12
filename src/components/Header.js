import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
   <header>
      <h1>Expensify</h1>
      <p>
         <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
         <span> | </span>
         <NavLink to="/create" activeClassName="is-active">Create</NavLink>
      </p>
   </header>
)

export default Header