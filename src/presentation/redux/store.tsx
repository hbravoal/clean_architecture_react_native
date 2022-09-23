import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducers'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from './rootSagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger]
})

sagaMiddleware.run(rootSaga)
