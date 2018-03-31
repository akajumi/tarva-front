import React, { Component } from 'react'

class ProjectViewports extends Component {
  constructor(props) {
    super(props)

    this.state = {
      viewports: props.viewports
    }
  }

  render() {
    return (
      <fieldset>
        <legend>&nbsp; Viewports (disabled) &nbsp;</legend>

        {this.state.viewports.map((viewport, index) => {
          return (
            <div className="row" key={'viewport' + index}>
              <div className="col sm-5 vtr-no-padding">
                <div className="form-group">
                  {index === 0 ? <label htmlFor={'label' + index}>Label</label> : null}
                  <input
                    type="text"
                    id={'label' + index}
                    name={'label' + index}
                    value={viewport.label}
                    className="input-block"
                    disabled
                  />
                </div>
              </div>

              <div className="col sm-1 vtr-no-padding" />

              <div className="col sm-2 vtr-no-padding">
                <div className="form-group">
                  {index === 0 ? <label htmlFor={'width' + index}>Width</label> : null}
                  <input
                    type="text"
                    id={'width' + index}
                    name={'width' + index}
                    value={viewport.width}
                    className="input-block"
                    disabled
                  />
                </div>
              </div>

              <div className="col sm-1 vtr-no-padding" />

              <div className="col sm-2 vtr-no-padding">
                <div className="form-group">
                  {index === 0 ? <label htmlFor={'height' + index}>Height</label> : null}
                  <input
                    type="text"
                    id={'height' + index}
                    name={'height' + index}
                    value={viewport.height}
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

export default ProjectViewports
