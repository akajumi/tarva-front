import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ProjectActions from './ProjectActions'

// eslint-disable-next-line
import config from './config.js'

class Project extends Component {
  constructor(props) {
    super(props)

    const paths = props.location.pathname.split('/')
    const projectName = paths[2]

    this.state = {
      projectName: projectName
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
                    <legend>Viewports</legend>

                    <div className="row">
                      <div className="col sm-4 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="label1">Label</label>
                          <input
                            type="text"
                            id="label1"
                            name="label1"
                            value="phone"
                            className="input-block"
                          />
                        </div>
                      </div>

                      <div className="col sm-1 vtr-no-padding" />

                      <div className="col sm-3 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="width1">Width</label>
                          <input
                            type="text"
                            id="width1"
                            name="width1"
                            value="480"
                            className="input-block"
                          />
                        </div>
                      </div>

                      <div className="col sm-1 vtr-no-padding" />

                      <div className="col sm-3 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="height1">Height</label>
                          <input
                            type="text"
                            id="height1"
                            name="height1"
                            value="600"
                            className="input-block"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col sm-4 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="label2">Label</label>
                          <input
                            type="text"
                            id="label2"
                            name="label2"
                            value="tablet_portrait"
                            className="input-block"
                          />
                        </div>
                      </div>

                      <div className="col sm-1 vtr-no-padding" />

                      <div className="col sm-3 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="width2">Width</label>
                          <input
                            type="text"
                            id="width2"
                            name="width2"
                            value="768"
                            className="input-block"
                          />
                        </div>
                      </div>

                      <div className="col sm-1 vtr-no-padding" />

                      <div className="col sm-3 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="height2">Height</label>
                          <input
                            type="text"
                            id="height2"
                            name="height2"
                            value="1024"
                            className="input-block"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col sm-4 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="label3">Label</label>
                          <input
                            type="text"
                            id="label3"
                            name="label3"
                            value="tablet_landscape"
                            className="input-block"
                          />
                        </div>
                      </div>

                      <div className="col sm-1 vtr-no-padding" />

                      <div className="col sm-3 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="width3">Width</label>
                          <input
                            type="text"
                            id="width3"
                            name="width3"
                            value="1024"
                            className="input-block"
                          />
                        </div>
                      </div>

                      <div className="col sm-1 vtr-no-padding" />

                      <div className="col sm-3 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="height3">Height</label>
                          <input
                            type="text"
                            id="height3"
                            name="height3"
                            value="768"
                            className="input-block"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col sm-4 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="label4">Label</label>
                          <input
                            type="text"
                            id="label4"
                            name="label4"
                            value="desktop"
                            className="input-block"
                          />
                        </div>
                      </div>

                      <div className="col sm-1 vtr-no-padding" />

                      <div className="col sm-3 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="width4">Width</label>
                          <input
                            type="text"
                            id="width4"
                            name="width4"
                            value="1280"
                            className="input-block"
                          />
                        </div>
                      </div>

                      <div className="col sm-1 vtr-no-padding" />

                      <div className="col sm-3 vtr-no-padding">
                        <div className="form-group">
                          <label htmlFor="height4">Height</label>
                          <input
                            type="text"
                            id="height4"
                            name="height4"
                            value="800"
                            className="input-block"
                          />
                        </div>
                      </div>
                    </div>
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
