import React, { Component } from 'react'

class ProjectId extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectId: props.projectId,
      description: props.projectDescription
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
  }

  render() {
    return (
      <fieldset>
        <legend>&nbsp; Meta (disabled) &nbsp;</legend>

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
                disabled
              />
            </div>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default ProjectId
