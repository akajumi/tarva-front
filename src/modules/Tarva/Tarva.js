import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

import Projects from 'modules/Projects'
import Project from 'modules/Project'

class Tarva extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  // static propTypes = {}

  // static defaultProps = {}

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps() {}

  render() {
    return (
      <div>
        <div className="vrt-header paper">
          <div className="row">
            <div className="sm-4 col">
              <h1 className="vrt-logo">
                <NavLink exact={true} to={'/'}>
                  VeRTa <small>Visual Regresion Test</small>
                </NavLink>
              </h1>
            </div>
            <div className="sm-8 col" style={{ textAlign: 'right' }}>
              <NavLink exact={true} to={'/'}>
                <button className="btn-small">Project list</button>
              </NavLink>
              &nbsp;
              <NavLink exact={true} to={'/new'}>
                <button className="btn-small">New project</button>
              </NavLink>
              <div className="float-right" />
            </div>
          </div>
        </div>

        <div className="vrt-content paper">
          <Switch>
            <Route exact path={'/'} component={Projects} />
            <Route exact path={'/:project'} component={Project} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Tarva
