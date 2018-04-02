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

  handleProjectIdUpdate = data => {
    let newConfig = this.state.projectConfig

    newConfig.description = data.description

    this.setState(
      {
        projectConfig: newConfig,
        projectDescription: data.description
      },
      () => {
        this.handleSave()
      }
    )
  }

  handleSave = () => {
    let projectConfig = this.state.projectConfig

    client
      .update(projectConfig)
      .then()
      .catch(response => {
        console.log(response)
      })
  }

  render() {
    return (
      <div>
        <ProjectActions name={this.state.projectName} />

        <div className="vrt-content paper">
          <div className="row">
            <div className="col sm-12">
              <div className="row">
                <h2>Project parameters:</h2>
              </div>

              <div className="row">
                <div className="col sm-4">
                  <ProjectId
                    projectId={this.state.projectName}
                    projectDescription={this.state.projectDescription}
                    action={this.handleProjectIdUpdate}
                  />
                  <br />
                  <ProjectViewports viewports={this.state.viewports} />
                  <br />
                  <ProjectPaths filepaths={this.state.paths} />
                </div>

                <div className="col sm-8">
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
