import { useState, useEffect } from 'react'

import ErrorMessage from "./re-used/ErrorMessage"
import AddComment from "./ReviewPage/AddComment"
import CommentList from "./ReviewPage/CommentList"
import ReviewDetails from "./ReviewPage/ReviewDetails"

const ReviewPage = (props) => {

    const [comments, setComments] = useState([])
    const [errorDetails, setErrorDetails] = useState({})

    return(<section>ReviewPage
        <ReviewDetails/>
        <CommentList comments={comments} setComments={setComments}/>
        <AddComment setComments={setComments} setErrorDetails={setErrorDetails}/>
        <ErrorMessage errorDetails={errorDetails}/>
    </section>)

}

export default ReviewPage