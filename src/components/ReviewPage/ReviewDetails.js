import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { getReview, getUserAvatar } from '../../utils/api'

import { formatDate, formatCategoryName } from '../../utils/format'

import defaultAvatar from '../../images/neutral-grey.png'

import ReviewVoteButtons from "./ReviewVoteButtons"

import '../../css/App.css'

const ReviewDetails = ({review_id, commentChange}) => {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true)
    const [review, setReview] = useState({})
    const [voteChange, setVoteChange] = useState(0)
    const [ownerAvatar, setOwnerAvatar] = useState(defaultAvatar)

    useEffect(() => {

        setIsLoading(true)

        getReview(review_id)
            .then((reviewResponse) => {

                setReview(reviewResponse)
                setIsLoading(false)
                return getUserAvatar(reviewResponse.owner)

            })
            .then((avatar) => {

                if (avatar !== '' && avatar !== undefined) {

                    setOwnerAvatar(avatar)

                }

            })
            .catch((err) => {

                navigate('/404error')

            })
            

    }, [review_id])

    const { title, owner, review_img_url, category, created_at, votes, comment_count, designer, review_body } = review

    if (isLoading) {

        return (<section className='review-body blue-border'>
            <h2 className='review-title'>Loading...</h2>
        </section>)

    }

    return(<section className='review-body blue-border'>
        <h2 className='review-title'>{title}</h2>
        <img alt={`${title} - review`} src={review_img_url} className='review-image'/>
        <section className={`review-owner blue-border`}>
            <p>{owner}</p>
            <img alt={`${owner}'s avatar`} src={ownerAvatar}/>
        </section>
        <p className='review-text'>{review_body}</p>
        <p className='category-tag'>Category</p>
        <p className='category-value'>{category ? formatCategoryName(category) : ''}</p>
        <p className='designer-tag'>Designer</p>
        <p className='designer-value'>{designer}</p>
        <p className='created-at-tag'>Review Posted</p>
        <div className='created-at-value'>{formatDate(created_at)}</div>
        <p className='review-votes'>{votes + voteChange} votes</p>
        <p className='review-comment-count'>{comment_count + commentChange} comments</p>
        <ReviewVoteButtons setVoteChange={setVoteChange} voteChange={voteChange} review_id={review_id}/>
    </section>)

}

export default ReviewDetails