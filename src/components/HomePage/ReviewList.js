import { useState, useEffect } from 'react'

import { getReviewsByCategory } from '../../utils/api'

import ReviewListItem from "./ReviewListItem"

import '../../css/App.css'

const ReviewList = ({categoryFilter, sortByQuery, orderQuery}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [reviewArray, setReviewArray] = useState([])

    useEffect(() => {

        getReviewsByCategory(categoryFilter, sortByQuery, orderQuery)
            .then((reviews) => {

                setReviewArray(reviews)
                setIsLoading(false)

            })

    }, [categoryFilter, sortByQuery, orderQuery])

    return(<section>
            <h3 className='background-header' hidden={!isLoading}>Loading...</h3>
            <ul className='review-list'>
            {reviewArray.map((review, index) => {
                return (<ReviewListItem key={review.review_id} review={review} borderColour={index % 4}/>)
            })}</ul>
        </section>)

}

export default ReviewList