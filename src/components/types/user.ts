interface IUser{
    id: number,
    name: string,
    email: string,
}

export interface IUserState {
    users: IUser[]
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface IFetchUsersSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: IUser[];
}

interface IFetchUsersError {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = IFetchUsersAction | IFetchUsersSuccess | IFetchUsersError;
