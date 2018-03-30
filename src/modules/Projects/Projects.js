import React, { Component } from 'react'

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
      <div>
        <h3>Project list</h3>
        <ul>
          {this.state.projects.map(project => {
            return <li>{project}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Projects
