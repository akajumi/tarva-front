import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import client from 'utils/api/client'

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }
  }

  static propTypes = {}

  static defaultProps = {
    projects: []
  }

  componentWillMount() {
    this.getData()
  }

  getData = () => {
    client
      .projects()
      .then(response => {
        this.setState({
          projects: response.data.projects
        })
      })
      .catch(response => {
        console.log(response)
      })
  }

  // componentDidMount() {}

  // componentWillReceiveProps() {}

  NoProjects = () => {
    if (this.state.projects.length === 0) {
      return (
        <div>
          <br />
          <div className="alert alert-primary">No projects available.</div>
        </div>
      )
    }

    return null
  }

  render() {
    return (
      <div className="vrt-content paper">
        <div className="row">
          <div className="sm-12 col">
            <h2>
              Project list: <span className="badge">{this.state.projects.length}</span>
            </h2>

            {this.NoProjects()}

            <div className="row flex-left">
              {this.state.projects.map(project => {
                return (
                  <div className="col-12 sm-6 md-3" key={'project-' + project.id}>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">{project.id}</h4>
                        <p className="card-text">{project.description}</p>
                        <NavLink
                          className="paper-btn btn-small"
                          exact={true}
                          to={'/project/' + project.id}
                        >
                          Go to project
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
