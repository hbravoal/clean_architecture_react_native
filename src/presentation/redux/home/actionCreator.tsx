import 'reflect-metadata'
import { container } from 'tsyringe'

import { call, put, takeLatest } from 'redux-saga/effects'
import { homePageSuccess, homePageErr } from './reducers'
import RequestHome from '../../../domain/home/model/requestHome';
import IHomeApplication from '../../../domain/interfaces/application/iHomeApplication';



function * homePage (): any {
  try {
    const homeApplication = container.resolve<IHomeApplication>(
      'IHomeApplication'
    )
    const response = yield call(async () => await homeApplication.handler(new RequestHome()))
    yield put(homePageSuccess(response))
  } catch (ex) {
    yield put(homePageErr(ex))
    console.log(ex)
  }
}

export default function * homeSaga ():any {
  yield takeLatest('home/homePageBegin', homePage)
}
