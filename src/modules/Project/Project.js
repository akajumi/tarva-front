import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ProjectActions from './ProjectActions'

import config from './config.js'

class Project extends Component {
  constructor(props) {
    super(props)

    const paths = props.location.pathname.split('/')
    const projectName = paths[2]

    console.log('PROJECTS')
    console.log(config().viewports)

    this.state = {
      projectName: projectName,
      viewports: config().viewports
    }
  }

  // static propTypes = {}

  // static defaultProps = {}

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps() {}

  render() {
    return (
      <div>
        <ProjectActions name={this.state.projectName} />

        <div className="vrt-content paper">
          <div className="row">
            <div className="col sm-12">
              <h2>Project parameters:</h2>

              <div className="row">
                <div className="col sm-4 vtr-no-padding">
                  <fieldset>
                    <legend>ID (disabled)</legend>

                    <div className="row">
                      <div className="col sm-12 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="label1">Project ID (lowercase, no spaces...)</label>
                          <input
                            type="text"
                            id="id"
                            name="id"
                            value={this.state.projectName}
                            className="input-block"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="row">
                <div className="col sm-4 vtr-no-padding">
                  <fieldset>
                    <legend>Viewports (disabled)</legend>

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
                              {index === 0 ? (
                                <label htmlFor={'height' + index}>Height</label>
                              ) : null}
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

                    {/* FIN */}
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Project.contextTypes = {
  router: PropTypes.object
}

export default Project
