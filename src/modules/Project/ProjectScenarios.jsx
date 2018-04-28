import React, { Component } from 'react'

class ProjectScenarios extends Component {
  constructor(props) {
    super(props)

    const workScenarios = props.scenarios.map(scenario => Object.assign({}, scenario))
    const newScenario = this.newScenario(workScenarios)

    this.state = {
      scenarios: workScenarios,
      newScenario: newScenario,
      action: props.action
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.scenarios.length === 0) {
      const workScenarios = nextProps.scenarios.map(scenario => Object.assign({}, scenario))
      const newScenario = this.newScenario(workScenarios)

      console.log('workScenarios')
      console.log(workScenarios)
      console.log('newScenario')
      console.log(newScenario)

      this.setState({
        scenarios: workScenarios,
        newScenario: newScenario
      })
    }

    if (nextProps.action !== this.state.action) {
      this.setState({
        action: nextProps.action
      })
    }
  }

  newScenario = scenarios => {
    let newScenario = Object.assign({}, scenarios[0])

    console.log('NEW SCENARIO')
    console.log(newScenario)

    newScenario.label = ''
    newScenario.url = ''
    newScenario.referenceUrl = ''
    newScenario.selectors = 'document'
    newScenario.hideSelectors = []
    newScenario.removeSelectors = []

    return newScenario
  }

  handleScenarioChange = event => {
    event.preventDefault()

    let scenarios = this.state.scenarios
    const scenario = event.target.name.split('-')[1]
    const name = event.target.name.split('-')[0]
    let value = event.target.value

    if (name === 'selectors' || name === 'hideSelectors' || name === 'removeSelectors') {
      value = event.target.value.split(',').map(val => val.trim())
    }

    scenarios[scenario][name] = value

    this.setState({
      scenarios: scenarios
    })
  }

  handleSave = () => {
    this.state.action(this.state.scenarios)
  }

  handleNewScenarioChange = event => {
    event.preventDefault()

    let newScenario = this.state.newScenario
    const name = event.target.name
    let value = event.target.value

    if (name === 'selectors' || name === 'hideSelectors' || name === 'removeSelectors') {
      value = event.target.value.split(',').map(val => val.trim())
    }

    newScenario[name] = value

    console.log('handleNewScenarioChange')
    console.log(newScenario)

    this.setState({
      newScenario: newScenario
    })
  }

  handleNewScenarrioSave = () => {
    const actualScenarios = this.state.scenarios.map(scenario => Object.assign({}, scenario))
    actualScenarios.push(this.state.newScenario)

    const newScenario = this.newScenario(actualScenarios)

    this.setState({
      scenarios: actualScenarios,
      newScenario: newScenario
    })

    this.state.action(actualScenarios)
  }

  render() {
    return (
      <div>
        <fieldset style={{ background: '#f5f5f5' }}>
          <legend>
            &nbsp; New scenario &nbsp;
            <button
              className="btn-success btn-small"
              style={{ position: 'absolute', top: -10, right: 15 }}
              onClick={this.handleNewScenarrioSave}
              name={'new-scenario'}
            >
              Save scenarios
            </button>
          </legend>

          <div className="row">
            <div className="col sm-6">
              <div className="form-group">
                <label htmlFor={'label'}>Label</label>
                <input
                  type="text"
                  id={'label'}
                  name={'label'}
                  value={this.state.newScenario.label}
                  className="input-block"
                  onChange={this.handleNewScenarioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor={'url'}>Url</label>
                <input
                  type="text"
                  id={'url'}
                  name={'url'}
                  value={this.state.newScenario.url}
                  className="input-block"
                  onChange={this.handleNewScenarioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor={'referenceUrl'}>Reference url</label>
                <input
                  type="text"
                  id={'referenceUrl'}
                  name={'referenceUrl'}
                  value={this.state.newScenario.referenceUrl}
                  className="input-block"
                  onChange={this.handleNewScenarioChange}
                />
              </div>
            </div>
            <div className="col sm-6">
              <div className="form-group">
                <label htmlFor={'selectors'}>Selectors</label>
                <input
                  type="text"
                  id={'selectors'}
                  name={'selectors'}
                  value={this.state.newScenario.selectors}
                  className="input-block"
                  onChange={this.handleNewScenarioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor={'hideSelectors'}>Hide selectors</label>
                <input
                  type="text"
                  id={'hideSelectors'}
                  name={'hideSelectors'}
                  value={this.state.newScenario.hideSelectors}
                  className="input-block"
                  onChange={this.handleNewScenarioChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor={'removeSelectors'}>Remove selectors</label>
                <input
                  type="text"
                  id={'removeSelectors'}
                  name={'removeSelectors'}
                  value={this.state.newScenario.removeSelectors}
                  className="input-block"
                  onChange={this.handleNewScenarioChange}
                />
              </div>
            </div>
          </div>
        </fieldset>
        <br />

        {this.state.scenarios.map((scenario, index) => {
          return (
            <div key={'scenario' + index}>
              <fieldset>
                <legend>
                  &nbsp; Scenario {index + 1} &nbsp;
                  <button
                    className="btn-success btn-small"
                    style={{ position: 'absolute', top: -10, right: 15 }}
                    onClick={this.handleSave}
                    name={'scenario-' + index}
                  >
                    Save scenarios
                  </button>
                </legend>

                <div className="row">
                  {/* Left column */}
                  <div className="col sm-6">
                    <div className="form-group">
                      <label htmlFor={'label-' + index}>Label (lowercase and no spaces)</label>
                      <input
                        type="text"
                        id={'label-' + index}
                        name={'label-' + index}
                        value={scenario.label}
                        className="input-block"
                        onChange={this.handleScenarioChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={'url-' + index}>Test url</label>
                      <input
                        type="text"
                        id={'url-' + index}
                        name={'url-' + index}
                        value={scenario.url}
                        className="input-block"
                        onChange={this.handleScenarioChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={'referenceUrl-' + index}>Reference url (if different)</label>
                      <input
                        type="text"
                        id={'referenceUrl-' + index}
                        name={'referenceUrl-' + index}
                        value={scenario.referenceUrl}
                        className="input-block"
                        onChange={this.handleScenarioChange}
                      />
                    </div>
                  </div>
                  {/* Right column */}
                  <div className="col sm-6">
                    <div className="form-group">
                      <label htmlFor={'selectors-' + index}>
                        Selectors (document, viewport, css selector)
                      </label>
                      <input
                        type="text"
                        id={'selectors-' + index}
                        name={'selectors-' + index}
                        value={scenario.selectors}
                        className="input-block"
                        onChange={this.handleScenarioChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={'hideSelectors-' + index}>
                        Hide selectors (comma separated)
                      </label>
                      <input
                        type="text"
                        id={'hideSelectors-' + index}
                        name={'hideSelectors-' + index}
                        value={scenario.hideSelectors}
                        className="input-block"
                        onChange={this.handleScenarioChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={'removeSelectors-' + index}>
                        Remove selectors (comma separated)
                      </label>
                      <input
                        type="text"
                        id={'removeSelectors-' + index}
                        name={'removeSelectors-' + index}
                        value={scenario.removeSelectors}
                        className="input-block"
                        onChange={this.handleScenarioChange}
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
