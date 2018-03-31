import React, { Component } from 'react'

class ProjectPaths extends Component {
  constructor(props) {
    super(props)

    console.log()

    this.state = {
      paths: props.filepaths
    }
  }

  render() {
    return (
      <fieldset>
        <legend>&nbsp; Paths (disabled) &nbsp;</legend>

        {Object.keys(this.state.paths).map((path, index) => {
          return (
            <div className="row" key={'path' + index}>
              <div className="col sm-12 vtr-no-padding">
                <div className="form-group">
                  <label htmlFor={'path' + index}>{path}</label>
                  <input
                    type="text"
                    id={'path' + index}
                    name={'path' + index}
                    value={this.state.paths[path]}
                    className="input-block"
                    disabled
                  />
                </div>
              </div>
            </div>
          )
        })}
      </fieldset>
    )
  }
}

export default ProjectPaths
