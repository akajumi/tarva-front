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
        <header>
          <h1>Project parameters:</h1>
        </header>
        <form>
          <label for="lorem">Lorem</label>
          <input type="text" id="lorem" name="lorem" value="" />
        </form>
      </div>
    )
  }
}

export default Project
