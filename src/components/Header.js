import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
   <header>
      <h1>Expensify</h1>
      <p>
         <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
         <span> | </span>
         <NavLink to="/create" activeClassName="is-active">Create</NavLink>
         <button onClick={startLogout}>Logout</button>
      </p>
   </header>
)

const mapDispatchToProps = (dispatch) => ({
   startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)