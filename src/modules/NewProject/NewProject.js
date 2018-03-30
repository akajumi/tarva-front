import React, { Component } from 'react'

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
      alert_text: ''
    }
  }

  static propTypes = {}

  static defaultProps = {
    name: '',
    name_error: '',
    description: '',
    description_error: '',
    alert: false,
    alert_text: ''
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps() {}

  handleInputChange = event => {
    event.preventDefault()

    let element_textError = '',
      value = event.target.value,
      name = event.target.name,
      property_value = name,
      property_errorText = name + '_error',
      new_state = {}

    if (event.target.value === '') {
      element_textError = 'This field is required.'
    }

    new_state[property_value] = value
    new_state[property_errorText] = element_textError

    this.setState(new_state)
  }

  closeAlert = () => {
    this.setState({
      alert: false,
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
    const projectName = project.name

    client
      .create(projectName)
      .then(response => {
        if (response.data.created) {
          this.setState({
            name: '',
            name_error: '',
            description: '',
            description_error: '',
            alert: true,
            alert_text: (
              <span>
                Project <strong>{this.state.name}</strong> sucessfully created.
              </span>
            )
          })
        }
      })
      .catch(response => {
        console.log(response)
      })
  }

  render() {
    return (
      <div className="row">
        <div className="sm-12 col">
          <h2>New project:</h2>
          {this.state.alert ? (
            <div>
              <br />
              <div className="alert alert-success">
                <span className="vrt-close-alert" onClick={this.closeAlert}>
                  x
                </span>
                {this.state.alert_text}
              </div>
            </div>
          ) : (
            <div>
              <div className="row">
                <div className="col sm-4 vtr-no-padding">
                  <div
                    className={this.state.name_error !== '' ? 'form-group vrt-error' : 'form-group'}
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
                <div className="col sm-6 vtr-no-padding">
                  <div
                    className={
                      this.state.description_error !== '' ? 'form-group vrt-error' : 'form-group'
                    }
                  >
                    <label htmlFor="description">Project description</label>
                    <textarea
                      className="input-block"
                      rows="4"
                      value={this.state.description}
                      id="description"
                      name="description"
                      onChange={this.handleInputChange}
                    />
                    {this.state.description_error !== '' ? (
                      <span className="vrt-error-description">{this.state.description_error}</span>
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
    )
  }
}

export default NewProject
