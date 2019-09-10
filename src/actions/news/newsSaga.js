import { put, takeEvery, call } from 'redux-saga/effects'
import {Api} from '../../api/newsApi'
import {FETCH_NEWS} from '../../constants';
import {receiveNews} from './newsActions'

function* newsFetch(action) {
    try{
        const data = yield call(Api)
        yield put(receiveNews(data))
    }catch(e){
        console.log(e);
    }
  
}

export default function* newsSaga() {
  yield takeEvery(FETCH_NEWS, newsFetch)
}
