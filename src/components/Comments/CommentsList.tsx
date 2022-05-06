import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { CommentsActionTypes } from "../../store/types/comments";
import styles from './commenst.module.scss';

const CommentsList = () => {
    const { comments, loading, error } = useTypedSelector(state => state.comments);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: CommentsActionTypes.FETCH_COMMENTS})
    }, [])

    if (loading) {
        return <h1>Идёт загрузка</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={styles.wrapper}>
            {comments.map((comment) => (
                <div className={styles.comment} key={comment.id}>{comment.id}-{comment.body}</div>
            ))}
        </div>
    );
};

export default CommentsList;
