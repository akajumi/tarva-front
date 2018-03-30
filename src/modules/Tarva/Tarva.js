import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

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
        <div class="row flex-center">
          <div class="sm-4 col">
            <h2 style={{ margin: 0, padding: 0 }}>
              VeRTa <small style={{ display: 'block', fontSize: 14 }}>Visual Regresion Test</small>
            </h2>
          </div>
          <div class="sm-8 col">
            <div class="row flex-center">
              <div class="sm-2 col">Tarva</div>
              <div class="sm-2 col">2</div>
              <div class="sm-2 col">3</div>
              <div class="sm-2 col">4</div>
              <div class="sm-2 col">5</div>
              <div class="sm-2 col">6</div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path={'/'} component={Projects} />
          <Route exact path={'/:project'} component={Project} />
        </Switch>
      </div>
    )
  }
}

export default Tarva
