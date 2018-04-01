import React, { Component } from 'react'

import client from 'utils/api/client'

class ProjectActions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectName: props.name,
      working: false
    }
  }

  handleReference = () => {
    this.setState(
      {
        working: true
      },
      () => {
        client
          .reference(this.state.projectName)
          .then(response => {
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
      .then(() => {})
      .catch(response => {
        console.log(response)
      })
  }

  showButtons = () => {
    if (this.state.working) {
      return (
        <div>
          <button className="btn-warning btn-small" disabled>
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
          href={
            process.env.REACT_APP_HTTP_SERVER +
            this.state.projectName +
            '/backstop_data/html_report/index.html'
          }
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
      <div className="vrt-content paper">
        <div className="row">
          <div className="sm-7 col">
            <h2>Project "{this.state.projectName}":</h2>
          </div>
          <div className="sm-5 col" style={{ textAlign: 'right' }}>
            {this.showButtons()}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectActions
