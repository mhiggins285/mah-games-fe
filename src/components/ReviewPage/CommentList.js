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

    return(<section>
        <h2>Comments</h2>
        {commentsArray.map((comment, index) => {
            return (<CommentListItem key={comment.comment_id} comment={comment} setCommentsArray={setCommentsArray} setCommentChange={setCommentChange} borderColour={index % 4}/>)
        })}
    </section>)

}

export default CommentList