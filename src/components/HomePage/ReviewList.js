import { useState, useEffect } from 'react'

import { getReviewsByCategory } from '../../utils/api'

import ReviewListItem from "./ReviewListItem"

import '../../css/App.css'

const ReviewList = ({categoryFilter, sortByQuery, orderQuery}) => {

    const [reviewArray, setReviewArray] = useState([])

    useEffect(() => {

        getReviewsByCategory(categoryFilter, sortByQuery, orderQuery)
            .then((reviews) => {

                setReviewArray(reviews)

            })

    }, [categoryFilter, sortByQuery, orderQuery])

    return(<ul className='review-list'>
        {reviewArray.map((review, index) => {
            return (<ReviewListItem key={review.review_id} review={review} borderColour={index % 4}/>)
        })}
    </ul>)

}

export default ReviewList