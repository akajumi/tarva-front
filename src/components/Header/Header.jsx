import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="vrt-header paper">
      <div className="row flex-middle">
        <div className="sm-4 col">
          <h1 className="vrt-logo">
            <NavLink exact={true} to={'/'}>
              VeRTa <small>Visual Regression Test</small>
            </NavLink>
          </h1>
        </div>
        <div className="sm-8 col" style={{ textAlign: 'right' }}>
          <NavLink className="paper-btn btn-small" exact={true} to={'/'}>
            Project list
          </NavLink>
          &nbsp;
          <NavLink className="paper-btn btn-small" exact={true} to={'/new'}>
            New project
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
