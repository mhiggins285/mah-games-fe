import { useState, useEffect } from 'react'

import { getCommentsByReview } from '../../utils/api'

import CommentListItem from './CommentListItem'

import '../../css/App.css'

const CommentList = ({commentsArray, setCommentsArray, review_id, setCommentChange}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        setIsLoading(true)

        getCommentsByReview(review_id)
            .then((comments) => {

                setCommentsArray(comments)
                setIsLoading(false)

            })

    }, [review_id])

    return(<section className='comment-list'>
        <h2 className='background-header'>Comments</h2>
        <h2 className='background-header' hidden={!isLoading}>Loading...</h2>
        {commentsArray.map((comment, index) => {
            return (<CommentListItem key={comment.comment_id} comment={comment} setCommentsArray={setCommentsArray} setCommentChange={setCommentChange} borderColour={index % 4}/>)
        })}
    </section>)

}

export default CommentList