import React, { Component } from 'react'
import PropTypes from 'prop-types'

import client from 'utils/api/client'

class Project extends Component {
  constructor(props) {
    super(props)

    const paths = props.location.pathname.split('/')
    const projectName = paths[2]

    this.state = {
      projectName: projectName,
      working: false
    }
  }

  // static propTypes = {}

  // static defaultProps = {}

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps() {}

  handleReference = () => {
    this.setState(
      {
        working: true
      },
      () => {
        client
          .reference(this.state.projectName)
          .then(response => {
            console.log(response)
            this.setState({
              working: false
            })
          })
          .catch(response => {
            console.log(response)
          })
      }
    )
  }

  handleTest = () => {
    this.setState(
      {
        working: true
      },
      () => {
        client
          .test(this.state.projectName)
          .then(response => {
            console.log(response)
            this.setState({
              working: false
            })
          })
          .catch(response => {
            console.log(response)
          })
      }
    )
  }

  handleApprove = () => {
    this.setState(
      {
        working: true
      },
      () => {
        client
          .approve(this.state.projectName)
          .then(response => {
            console.log(response)
            this.setState({
              working: false
            })
          })
          .catch(response => {
            console.log(response)
          })
      }
    )
  }

  handleReport = () => {
    client
      .report(this.state.projectName)
      .then(response => {
        console.log(response)
      })
      .catch(response => {
        console.log(response)
      })
  }

  showButtons = () => {
    if (this.state.working) {
      return (
        <div>
          <button className="btn-small" disabled>
            Work in progress...
          </button>
        </div>
      )
    }
    return (
      <div>
        <button className="btn-small" onClick={this.handleReference}>
          Reference
        </button>
        &nbsp;
        <button className="btn-small" onClick={this.handleTest}>
          Test
        </button>
        &nbsp;
        <button className="btn-small" onClick={this.handleApprove}>
          Approve
        </button>
        &nbsp;
        <a
          href={process.env.REACT_APP_HTTP_API + 'projects/' + this.state.projectName + '/report'}
          className="paper-btn btn-small"
          target="_blank"
          rel="noopener noreferrer"
        >
          Report
        </a>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="sm-8 col">
            <h2>Project parameters:</h2>
          </div>
          <div className="sm-4 col" style={{ textAlign: 'right' }}>
            {this.showButtons()}
          </div>
        </div>
        <div className="row flex-left">sdfsdf</div>
      </div>
    )
  }
}

Project.contextTypes = {
  router: PropTypes.object
}

export default Project
