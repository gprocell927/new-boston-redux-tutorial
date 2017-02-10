import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './reducers'
import App from './components/App'

const store = createStore(allReducers)
// /  <Provider store={store}> lets all components access the store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
