import {CommentsAction, CommentsActionTypes, ICommentsState} from "../../../types/comments";

const initialState: ICommentsState = {
    comments: [],
}

export default function commentsReducer(state = initialState, action: CommentsAction): ICommentsState {
    switch (action.type){
        case CommentsActionTypes.FETCH_COMMENTS:
            return { comments: [] }
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return { comments: action.payload }
        default:
            return state
    }
}
