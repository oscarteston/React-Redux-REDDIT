import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from '../reducers/reducers';
import AsyncApp from './AsyncApp';

const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, // nos permite despachar funciones
      loggerMiddleware // buen middleware que registra las acciones
    )
  );

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}
