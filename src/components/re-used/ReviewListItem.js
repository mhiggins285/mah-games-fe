import { useEffect, useState, useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { getUserAvatar, deleteReview } from '../../utils/api'

import { formatDate, formatCategoryName } from '../../utils/format'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import defaultAvatar from '../../images/neutral-grey.png'
import defaultReviewImage from '../../images/logo-transparent-background.png'

import '../../css/App.css'

const ReviewListItem = ({review, borderColour, setCategoryFilter, setReviewArray}) => {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUserContext)

    const [ownerAvatar, setOwnerAvatar] = useState(defaultAvatar)

    const {review_id, title, owner, category, created_at, votes, comment_count} = review

    let { review_img_url } = review

    if (!review_img_url) {

        review_img_url = defaultReviewImage

    }

    const handleReviewClick = () => {

        navigate(`/reviews/${review_id}`)

    }

    const handleCategoryClick = (event) => {

        event.stopPropagation()

        setCategoryFilter(category)

    }

    const handleUserClick = (event) => {

        event.stopPropagation()

        navigate(`/users/${review.owner}`)

    }

    const handleDeleteReview = (event) => {

        event.stopPropagation()

        deleteReview(review_id)
            .then(() => {

                setReviewArray((oldReviewArray) => {

                    const newReviewArray = oldReviewArray.filter((review) => {
                        return review.review_id !== review_id
                    })

                    return newReviewArray

                })

            })


    }
    
    useEffect(() => {

        getUserAvatar(owner)
            .then((avatar) => {

                if (avatar !== '' && avatar !== undefined) {

                    setOwnerAvatar(avatar)

                }

            })

    }, [review_id])

    let borderStyle = ''

    switch (borderColour) {

        case 0:
            borderStyle = 'blue-border'
            break
        case 1:
            borderStyle = 'green-border'
            break
        case 2:
            borderStyle = 'red-border'
            break
        case 3:
            borderStyle = 'yellow-border'
            break

    }

    const isHomePageItem = !!setCategoryFilter

    let categoryLine = <p className='review-details review-category' onClick={(event) => handleCategoryClick(event)}>{formatCategoryName(category)}</p>

    if (!isHomePageItem) {

        categoryLine = <p className='review-details review-category--user-page'>{formatCategoryName(category)}</p>

    }

    return(<li className={`review-box ${borderStyle}`} onClick={handleReviewClick}>
        <h2 className='review-title'>{title}</h2>
        <img alt={`${title} - review`} src={review_img_url} className='review-image'/>
        <section className='review-details'>
            <section className={`review-owner ${borderStyle}`} onClick={(event) => handleUserClick(event)}>
                <p>{owner}</p>
                <img alt={`${ownerAvatar}'s avatar`} src={ownerAvatar}/>
            </section>
            {categoryLine}
            <p className='review-details'>{votes} votes</p>
            <p className='review-details'>{comment_count} comments</p>
        </section>
        {formatDate(created_at)}
        <button onClick={(event) => handleDeleteReview(event)} hidden={!(owner === currentUser)} className='delete-review-button'>Delete Review</button>
    </li>)

}

export default ReviewListItem