import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ErrorMessage from "./re-used/ErrorMessage"
import AddComment from "./ReviewPage/AddComment"
import CommentList from "./ReviewPage/CommentList"
import ReviewDetails from "./ReviewPage/ReviewDetails"

const ReviewPage = (props) => {

    const [commentsArray, setCommentsArray] = useState([])
    const [errorDetails, setErrorDetails] = useState({})
    const [commentChange, setCommentChange] = useState(0)

    const { review_id } = useParams()

    return(<section>
        <ReviewDetails review_id={review_id} commentChange={commentChange}/>
        <CommentList commentsArray={commentsArray} setCommentsArray={setCommentsArray} review_id={review_id} setCommentChange={setCommentChange}/>
        <AddComment setCommentsArray={setCommentsArray} setErrorDetails={setErrorDetails} review_id={review_id} setCommentChange={setCommentChange}/>
        <ErrorMessage errorDetails={errorDetails}/>
    </section>)

}

export default ReviewPage