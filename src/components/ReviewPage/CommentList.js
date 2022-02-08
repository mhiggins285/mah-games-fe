import { useEffect } from 'react'

import { getCommentsByReview } from '../../utils/api'

import CommentListItem from './CommentListItem'

const CommentList = ({commentsArray, setCommentsArray, review_id, setCommentChange}) => {

    useEffect(() => {

        getCommentsByReview(review_id)
            .then((comments) => {

                setCommentsArray(comments)

            })

    }, [review_id])

    return(<section>Comment List
        {commentsArray.map((comment) => {
            return (<CommentListItem key={comment.comment_id} comment={comment} setCommentsArray={setCommentsArray} setCommentChange={setCommentChange}/>)
        })}
    </section>)

}

export default CommentList