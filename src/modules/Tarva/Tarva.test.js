import React from 'react'
import ReactDOM from 'react-dom'
import Tarva from './Tarva'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Tarva />, div)
  ReactDOM.unmountComponentAtNode(div)
})
