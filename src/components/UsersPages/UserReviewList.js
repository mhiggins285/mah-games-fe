import { useState, useEffect } from 'react'

import { getReviewsByCategory } from '../../utils/api'

import ReviewListItem from '../re-used/ReviewListItem'

import '../../css/App.css'

const UserReviewList = ({user}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [reviewsArray, setReviewsArray] = useState([])

    useEffect(() => {

        setIsLoading(true)

        getReviewsByCategory()
            .then((reviews) => {

                const userReviews = reviews.filter((review) => {

                    return (review.owner === user)

                })

                setReviewsArray(userReviews)
                setIsLoading(false)

            })

    }, [user])

    return (<section className='user-page'>
        <h2 className='background-header'>Reviews</h2>
        <p className='background-text' hidden={isLoading || reviewsArray.length === 0}>Select a review to read it.</p>
        <p className='background-text' hidden={isLoading || reviewsArray.length !== 0}>This user has not yet written any reviews.</p>
        <h3 className='background-header' hidden={!isLoading}>Loading...</h3>
        <ul className='review-list'>{reviewsArray.map((review, index) => {

            return (<ReviewListItem key={review.review_id} review={review} borderColour={(index + 1) % 4}/>)

        })}</ul>
        </section>)


}

export default UserReviewList