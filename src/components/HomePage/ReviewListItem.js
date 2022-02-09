import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { getUserAvatar } from '../../utils/api'

import { formatDate, formatCategoryName } from '../../utils/format'

import '../../css/HomePage.css'

const ReviewListItem = ({review, borderColour}) => {

    const navigate = useNavigate()

    const [ownerAvatar, setOwnerAvatar] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png')

    const {review_id, title, owner, review_img_url, category, created_at, votes, comment_count} = review

    const handleReviewClick = () => {

        navigate(`/reviews/${review_id}`)

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

    return(<li className={`review-box ${borderStyle}`} onClick={handleReviewClick}>
        <h2 className='review-title'>{title}</h2>
        <img alt={`${title} - review`} src={review_img_url} className='review-image'/>
        <section className='review-details'>
            <section className={`review-owner ${borderStyle}`}>
                <p>{owner}</p>
                <img alt={`${ownerAvatar}'s avatar`} src={ownerAvatar}/>
            </section>
            <p className='review-details review-category'>{formatCategoryName(category)}</p>
            <p className='review-details'>{votes} votes</p>
            <p className='review-details'>{comment_count} comments</p>
        </section>
        {formatDate(created_at)}
    </li>)

}

export default ReviewListItem