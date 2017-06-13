import { put, call, takeEvery } from 'redux-saga/effects';
import * as services from './services';
import * as constants from './constants/actions';
import * as actions from './actions';


export function* fetchData() {
  const payload = yield call(services.fetchData);
  yield put(actions.fetchData(payload));
}


function* watcher(action) {
  yield takeEvery(constants.FETCH_ASYNC_DATA, fetchData, action);
}

export default function* rootSaga() {
  yield watcher();
}
