import { usersWatcher } from "./users";

export default function* rootSaga() {
    yield usersWatcher();
}
