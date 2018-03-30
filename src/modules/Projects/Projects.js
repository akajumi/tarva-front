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

  render() {
    return (
      <div className="row">
        <div className="sm-12 col">
          <h2>
            Project list: <span className="badge">{this.state.projects.length}</span>
          </h2>
          {this.state.projects.length !== 0 ? null : (
            <div>
              <br />
              <div className="alert alert-primary">No projects available.</div>
            </div>
          )}
          <div className="row flex-left">
            {this.state.projects.map(project => {
              return (
                <div className="col-12 sm-6 md-3" key={'project-' + project}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{project}</h4>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
                      </p>
                      <NavLink
                        className="paper-btn btn-small"
                        exact={true}
                        to={'/project/' + project}
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
    )
  }
}

export default Projects
