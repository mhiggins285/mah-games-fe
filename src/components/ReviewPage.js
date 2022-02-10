import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ErrorMessage from "./re-used/ErrorMessage"
import AddComment from "./ReviewPage/AddComment"
import CommentList from "./ReviewPage/CommentList"
import ReviewDetails from "./ReviewPage/ReviewDetails"

import '../css/App.css'

const ReviewPage = () => {

    const [commentsArray, setCommentsArray] = useState([])
    const [errorDetails, setErrorDetails] = useState({})
    const [commentChange, setCommentChange] = useState(0)

    const { review_id } = useParams()

    return(<section className='review-page'>
        <ReviewDetails className='review-grid' review_id={review_id} commentChange={commentChange}/>
        <aside className='widescreen-scrollable'>
            <CommentList className='comments-grid' commentsArray={commentsArray} setCommentsArray={setCommentsArray} review_id={review_id} setCommentChange={setCommentChange}/>
            <AddComment className='add-comment-grid' setCommentsArray={setCommentsArray} setErrorDetails={setErrorDetails} review_id={review_id} setCommentChange={setCommentChange}/>
            <ErrorMessage className='error-grid' errorDetails={errorDetails}/>
        </aside>
    </section>)

}

export default ReviewPage