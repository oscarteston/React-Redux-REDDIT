import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <Root />,
  document.querySelector('.container')
)

// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
// import { createStore, applyMiddleware } from 'redux'
// import { selectSubreddit, fetchPosts } from './actions'
// import rootReducer from './reducers'

// const loggerMiddleware = createLogger()

// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     thunkMiddleware, // nos permite despachar funciones
//     loggerMiddleware // buen middleware que registra las acciones
//   )
// )

// store.dispatch(selectSubreddit('reactjs'))
// store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
//   console.log(store.getState())
// )