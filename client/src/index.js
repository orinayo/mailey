import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import App from './containers/App'
import reducers from './reducers/index'

const logger = createLogger()
const store = createStore(reducers, {}, applyMiddleware(thunkMiddleware, logger))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))
