import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import client from 'utils/api/client'

class NewProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      name_error: '',
      description: '',
      description_error: '',
      alert: false,
      alert_type: 'success',
      alert_text: '',
      createdProject: ''
    }
  }

  static propTypes = {}

  static defaultProps = {
    name: '',
    name_error: '',
    description: '',
    description_error: '',
    alert: false,
    alert_type: 'success',
    alert_text: '',
    createdProject: ''
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps() {}

  handleInputChange = event => {
    event.preventDefault()

    let value = event.target.value
    let name = event.target.name

    let new_state = {}
    let property_value = name
    let property_errorText = name + '_error'
    let element_textError = ''

    if (value === '') {
      element_textError = 'This field is required.'
    }

    new_state[property_value] = value
    new_state[property_errorText] = element_textError

    this.setState(new_state)
  }

  closeAlert = () => {
    this.setState({
      alert: false,
      alert_type: 'success',
      alert_text: ''
    })
  }

  handleSave = () => {
    const project = {
      name: this.state.name,
      description: this.state.description
    }

    let save = true
    let new_state = {}

    if (project.name === '') {
      new_state['name_error'] = 'This field is required.'
      save = false
    }
    if (project.description === '') {
      new_state['description_error'] = 'This field is required.'
      save = false
    }

    if (save) {
      this.createProject(project)
    } else {
      this.setState(new_state)
    }
  }

  createProject = project => {
    client
      .create(project)
      .then(response => {
        if (response.data.created) {
          this.setState({
            name: '',
            name_error: '',
            description: '',
            description_error: '',
            alert: true,
            alert_type: 'success',
            alert_text: response.data.description,
            createdProject: project.name
          })
        } else {
          this.setState({
            alert: true,
            alert_type: 'danger',
            alert_text: response.data.description
          })
        }
      })
      .catch(response => {
        console.log(response)
      })
  }

  showAlert = () => {
    return (
      <div>
        <br />
        <div className={'alert alert-' + this.state.alert_type}>{this.state.alert_text}</div>
        <div className="row">
          <div className="sm-12 col" style={{ textAlign: 'center' }}>
            <button
              className="btn-small"
              onClick={() => {
                this.props.history.push('/')
              }}
            >
              Go to project list
            </button>
            &nbsp;
            <button className="btn-small" onClick={this.closeAlert}>
              Create another project
            </button>
            &nbsp;
            <button
              className="btn-small"
              onClick={() => {
                this.props.history.push('/project/' + this.state.createdProject)
              }}
            >
              Go to project "{this.state.createdProject}"
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="vrt-content paper">
        <div className="row">
          <div className="sm-12 col">
            <h2>New project:</h2>

            {this.state.alert ? (
              this.showAlert()
            ) : (
              <div>
                <div className="row">
                  <div className="col sm-3 vtr-no-padding">
                    <div
                      className={
                        this.state.name_error !== '' ? 'form-group vrt-error' : 'form-group'
                      }
                    >
                      <label htmlFor="name">Project name (lowercase and no spaces)</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="input-block"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      />
                      {this.state.name_error !== '' ? (
                        <span className="vrt-error-description">{this.state.name_error}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col sm-10 vtr-no-padding">
                    <div
                      className={
                        this.state.description_error !== '' ? 'form-group vrt-error' : 'form-group'
                      }
                    >
                      <label htmlFor="description">Project description</label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        className="input-block"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                      />
                      {this.state.description_error !== '' ? (
                        <span className="vrt-error-description">
                          {this.state.description_error}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col sm-6 vtr-no-padding">
                    <button className="btn-small" onClick={this.handleSave}>
                      Create
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NewProject)
