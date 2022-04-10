import { CommentsAction, CommentsActionTypes, ICommentsState } from "../../../types/comments";

const initialState: ICommentsState = {
    comments: [],
    loading: false,
    error: null
}

export default function commentsReducer(state = initialState, action: CommentsAction): ICommentsState {
    switch (action.type){
        case CommentsActionTypes.FETCH_COMMENTS:
            return { loading: true, error: null, comments: [] }
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return { loading: false, error: null, comments: action.payload }
        case CommentsActionTypes.FETCH_COMMENTS_ERROR:
            return { loading: false, error: action.payload, comments: [] }
        default:
            return state
    }
}
