import React, { Component } from 'react'
import PropTypes from 'prop-types'

import client from 'utils/api/client'

import ProjectActions from './ProjectActions'
import ProjectId from './ProjectId'
import ProjectViewports from './ProjectViewports'
import ProjectScenarios from './ProjectScenarios'
import ProjectPaths from './ProjectPaths'

class Project extends Component {
  constructor(props) {
    super(props)

    const routerPath = props.location.pathname.split('/')
    const projectName = routerPath[2]

    this.state = {
      projectName: projectName,
      projectConfig: {},
      projectDescription: '',
      viewports: [],
      scenarios: [],
      paths: {}
    }
  }

  // static propTypes = {}

  // static defaultProps = {}

  componentWillMount() {
    this.getProjectConfig()
  }

  getProjectConfig = () => {
    client
      .project(this.state.projectName)
      .then(response => {
        console.log(response.data)
        this.setState({
          projectName: response.data.id,
          projectConfig: response.data,
          projectDescription: response.data.description,
          viewports: response.data.viewports,
          scenarios: response.data.scenarios,
          paths: response.data.paths
        })
      })
      .catch(response => {
        console.log(response)
      })
  }

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
