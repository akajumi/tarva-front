import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ProjectActions from './ProjectActions'
import ProjectId from './ProjectId'
import ProjectViewports from './ProjectViewports'
import ProjectScenarios from './ProjectScenarios'
import ProjectPaths from './ProjectPaths'

import config from './config.js'

class Project extends Component {
  constructor(props) {
    super(props)

    const routerPath = props.location.pathname.split('/')
    const projectName = routerPath[2]

    this.state = {
      projectName: projectName,
      projectDescription: config(projectName).description,
      viewports: config(projectName).viewports,
      scenarios: config(projectName).scenarios,
      paths: config(projectName).paths
    }
  }

  // static propTypes = {}

  // static defaultProps = {}

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps() {}

  render() {
    return (
      <div>
        <ProjectActions name={this.state.projectName} />

        <div className="vrt-content paper">
          <div className="row">
            <div className="col sm-12">
              <h2>Project parameters:</h2>

              <div className="row">
                <div className="col sm-5">
                  <ProjectId
                    projectId={this.state.projectName}
                    projectDescription={this.state.projectDescription}
                  />
                  <br />
                  <ProjectViewports viewports={this.state.viewports} />
                  <br />
                  <ProjectPaths filepaths={this.state.paths} />
                </div>

                <div className="col sm-7">
                  <ProjectScenarios scenarios={this.state.scenarios} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Project.contextTypes = {
  router: PropTypes.object
}

export default Project
