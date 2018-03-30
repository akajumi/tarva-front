import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

import Projects from 'modules/Projects'
import NewProject from 'modules/NewProject'
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
          <div className="row flex-middle">
            <div className="sm-4 col">
              <h1 className="vrt-logo">
                <NavLink exact={true} to={'/'}>
                  VeRTa <small>Visual Regresion Test</small>
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
              <div className="float-right" />
            </div>
          </div>
        </div>

        <div className="vrt-content paper">
          <Switch>
            <Route exact path={'/'} component={Projects} />
            <Route exact path={'/new'} component={NewProject} />
            <Route path={'/project/:project'} component={Project} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Tarva
