import { usersWatcher } from "./users";
import { commentsWatcher } from "./comments";
import { all } from 'redux-saga/effects'
import {todosWatcher} from "./todos";

export default function* rootSaga() {
  yield all([
      usersWatcher(),
      commentsWatcher(),
      todosWatcher(),
  ])
}
