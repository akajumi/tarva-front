import React, { Component } from 'react'

class ProjectScenarios extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scenarios: props.scenarios
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scenarios !== this.state.scenarios) {
      this.setState({
        scenarios: nextProps.scenarios
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.scenarios.map((scenario, index) => {
          return (
            <div key={'scenario' + index}>
              <fieldset>
                <legend>&nbsp; Scenario {index + 1} &nbsp;</legend>
                <div className="row">
                  <div className="col sm-12 vtr-no-padding">
                    <div className="form-group">
                      <label htmlFor={'label' + index}>Label</label>
                      <input
                        type="text"
                        id={'label' + index}
                        name={'label' + index}
                        value={scenario.label}
                        className="input-block"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col sm-12 vtr-no-padding">
                    <div className="form-group">
                      <label htmlFor={'url' + index}>Url</label>
                      <input
                        type="text"
                        id={'url' + index}
                        name={'url' + index}
                        value={scenario.url}
                        className="input-block"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
              <br />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProjectScenarios
