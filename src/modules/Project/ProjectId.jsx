import React, { Component } from 'react'

class ProjectId extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectId: props.projectId,
      description: props.projectDescription,
      action: props.action
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.projectId !== this.state.projectId ||
      nextProps.projectDescription !== this.state.description
    ) {
      this.setState({
        projectId: nextProps.projectId,
        description: nextProps.projectDescription
      })
    }

    if (nextProps.action !== this.state.action) {
      this.setState({
        action: nextProps.action
      })
    }
  }

  handleInputChange = event => {
    event.preventDefault()

    let value = event.target.value
    let name = event.target.name

    let new_state = {}
    let property_value = name

    new_state[property_value] = value

    this.setState(new_state)
  }

  handleSave = () => {
    const data = {
      id: this.state.projectId,
      description: this.state.description
    }

    this.state.action(data)
  }

  render() {
    return (
      <fieldset>
        <legend>
          &nbsp; Meta info &nbsp;
          <button
            className="btn-success btn-small"
            style={{ position: 'absolute', top: -10, right: 15 }}
            onClick={this.handleSave}
          >
            Save meta
          </button>
        </legend>

        <div className="row">
          <div className="col sm-12 vtr-no-padding">
            <div className="form-group">
              <label htmlFor="id">Project ID</label>
              <input
                type="text"
                id="id"
                name="id"
                value={this.state.projectId}
                className="input-block"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col sm-12 vtr-no-padding">
            <div className="form-group">
              <label htmlFor="id">Project description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={this.state.description}
                className="input-block"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default ProjectId
