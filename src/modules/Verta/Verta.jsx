import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Projects from 'modules/Projects'
import NewProject from 'modules/NewProject'
import Project from 'modules/Project'

class Verta extends Component {
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
        <Header />

        <Switch>
          <Route exact path={'/'} component={Projects} />
          <Route exact path={'/new'} component={NewProject} />
          <Route path={'/project/:project'} component={Project} />
        </Switch>
      </div>
    )
  }
}

export default Verta
