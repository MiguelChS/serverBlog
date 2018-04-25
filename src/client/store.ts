import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as listPost } from 'blg-listpost';
import {logger} from 'redux-logger'

export const store = createStore(
  combineReducers({
    listPost
  }),
  applyMiddleware(logger)
)