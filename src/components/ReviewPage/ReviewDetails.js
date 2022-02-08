import { useState, useEffect } from 'react'

import { getReview, getUserAvatar } from '../../utils/api'

import ReviewVoteButtons from "./ReviewVoteButtons"

const ReviewDetails = ({review_id, commentChange}) => {

    const [review, setReview] = useState({})
    const [voteChange, setVoteChange] = useState(0)
    const [ownerAvatar, setOwnerAvatar] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png')

    useEffect(() => {

        getReview(review_id)
            .then((reviewResponse) => {

                setReview(reviewResponse)
                return getUserAvatar(reviewResponse.owner)

            })
            .then((avatar) => {

                if (avatar !== '' && avatar !== undefined) {

                    setOwnerAvatar(avatar)

                }

            })

    }, [review_id])

    const { title, owner, review_img_url, category, created_at, votes, comment_count, designer, review_body } = review

    return(<section>Review
        <h2>{title}</h2>
        <p>{owner}</p>
        <img alt={`${owner}'s avatar`} src={ownerAvatar}/>
        <img alt={`${title} - review image`} src={review_img_url}/>
        <p>{review_body}</p>
        <p>{category}</p>
        <p>{designer}</p>
        <p>{created_at}</p>
        <p>{votes + voteChange} votes</p>
        <p>{comment_count + commentChange} comments</p>
        <ReviewVoteButtons setVoteChange={setVoteChange} review_id={review_id}/>
    </section>)

}

export default ReviewDetails