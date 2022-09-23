
import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from './home/reducers'
import IState from '../../domain/interfaces/presentation/IState'

export const rootReducer = combineReducers<IState>({
  home: homeReducer
})
