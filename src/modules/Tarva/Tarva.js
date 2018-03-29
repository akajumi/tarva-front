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
        <header>
          <h1>Welcome to Tarva front-end</h1>
        </header>
        <Switch>
          <Route exact path={'/'} component={Projects} />
          <Route exact path={'/:project'} component={Project} />
        </Switch>
      </div>
    )
  }
}

export default Tarva
