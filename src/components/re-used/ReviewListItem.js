import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { getUserAvatar } from '../../utils/api'

import { formatDate, formatCategoryName } from '../../utils/format'

import defaultAvatar from '../../images/neutral-grey.png'

import '../../css/App.css'

const ReviewListItem = ({review, borderColour, setCategoryFilter}) => {

    const navigate = useNavigate()

    const [ownerAvatar, setOwnerAvatar] = useState(defaultAvatar)

    const {review_id, title, owner, review_img_url, category, created_at, votes, comment_count} = review

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
    </li>)

}

export default ReviewListItem