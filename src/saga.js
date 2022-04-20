import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export default function* watcher() {
  yield takeLatest('DOG_REQUESTED', worker);
}

function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  })
}

function* worker() {
  try {
    const res = yield call(fetchDog);
    const dog = res.data.message;
    yield put({ type: 'DOG_FETCH_SUCCESS', dog })
  } catch (err) {
    const error = err.message;
    yield put({ type: 'DOG_FETCH_FAILED', error });
  }
}