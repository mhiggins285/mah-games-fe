import { useState, useEffect } from 'react'

import { getReviewsByCategory } from '../../utils/api'

import ReviewListItem from "./ReviewListItem"

const ReviewList = ({categoryFilter}) => {

    const [reviewArray, setReviewArray] = useState([])

    useEffect(() => {

        getReviewsByCategory(categoryFilter)
            .then((reviews) => {

                setReviewArray(reviews)

            })

    }, [categoryFilter])

    return(<section>Review List
        {reviewArray.map((review) => {
            return (<ReviewListItem key={review.review_id} review={review}/>)
        })}
    </section>)

}

export default ReviewList