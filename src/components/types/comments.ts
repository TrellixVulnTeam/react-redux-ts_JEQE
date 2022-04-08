export interface ICommentsState {
    comments: any[];
}

export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
}

interface IFetchCommentsAction {
    type: CommentsActionTypes.FETCH_COMMENTS;
}

interface IFetchCommentSuccess {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS;
    payload: any[];
}

export type CommentsAction = IFetchCommentsAction | IFetchCommentSuccess
