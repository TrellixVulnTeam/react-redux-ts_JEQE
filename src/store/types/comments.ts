interface IComments  {
    id: number;
    name: string;
    body: string;
}

export interface ICommentsState {
    comments: IComments[];
    loading: boolean;
    error: string | null;
}

export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",
}

interface IFetchCommentsAction {
    type: CommentsActionTypes.FETCH_COMMENTS;
}

interface IFetchCommentSuccess {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
    payload: IComments[];
}

interface IFetchCommentError {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR;
    payload: string;
}

export type CommentsAction = IFetchCommentsAction | IFetchCommentSuccess | IFetchCommentError
