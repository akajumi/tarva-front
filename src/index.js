import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './redux/store'

import Tarva from 'modules/Tarva'
import registerServiceWorker from './registerServiceWorker'

// We listen the router changes (history changes) to scroll the app to the top.
history.listen((location, action) => {
  window.scrollTo(0, 0)
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Tarva />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('verta')
)
registerServiceWorker()
