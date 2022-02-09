import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { getReview, getUserAvatar } from '../../utils/api'

import { formatDate, formatCategoryName } from '../../utils/format'

import ReviewVoteButtons from "./ReviewVoteButtons"

import '../../css/ReviewPage.css'

const ReviewDetails = ({review_id, commentChange}) => {

    const navigate = useNavigate()

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
            .catch((err) => {

                navigate('/404error')

            })
            

    }, [review_id])

    const { title, owner, review_img_url, category, created_at, votes, comment_count, designer, review_body } = review

    return(<section className='review-body blue-border'>
        <h2 className='review-title'>{title}</h2>
        <img alt={`${title} - review image`} src={review_img_url} className='review-image'/>
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
        <ReviewVoteButtons setVoteChange={setVoteChange} review_id={review_id}/>
    </section>)

}

export default ReviewDetails