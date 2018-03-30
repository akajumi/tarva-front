import React, { Component } from 'react'

class Project extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  // static propTypes = {}

  // static defaultProps = {}

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps() {}

  render() {
    return (
      <div>
        <div className="row">
          <div className="sm-8 col">
            <h2>Project parameters:</h2>
          </div>
          <div className="sm-4 col" style={{ textAlign: 'right' }}>
            <button className="btn-small">Reference</button>
            &nbsp;
            <button className="btn-small">Test</button>
            &nbsp;
            <button className="btn-small">Approve</button>
            &nbsp;
            <button className="btn-small">Report</button>
          </div>
        </div>
        <div className="row flex-left">sdfsdf</div>
      </div>
    )
  }
}

export default Project
