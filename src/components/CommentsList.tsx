import React from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { CommentsActionTypes } from "./types/comments";

const CommentsList = () => {
    const { comments, loading, error } = useTypedSelector(state => state.comments);
    const dispatch = useDispatch()

    if (loading) {
        return <h1>Идёт загрузка</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <button
                type="button"
                onClick={() => dispatch({type: CommentsActionTypes.FETCH_COMMENTS})}>
                Получить комментарии
            </button>
            <div>
                {comments.map((comment) => (
                    <div key={comment.id}>{comment.id}-{comment.body}</div>
                ))}
            </div>
        </div>
    );
};

export default CommentsList;
