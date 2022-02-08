import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { getUserAvatar } from '../../utils/api'

const ReviewListItem = ({review}) => {

    const [ownerAvatar, setOwnerAvatar] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png')

    const {review_id, title, owner, review_img_url, category, created_at, votes, comment_count} = review
    
    useEffect(() => {

        getUserAvatar(owner)
            .then((avatar) => {

                if (avatar !== '' && avatar !== undefined) {

                    setOwnerAvatar(avatar)

                }

            })

    }, [review_id])

    return(<section>Review
        <h2>{title}</h2>
        <p>{owner}</p>
        <img alt={`${ownerAvatar}'s avatar`} src={ownerAvatar}/>
        <img alt={`${title} - review image`} src={review_img_url}/>
        <p>{category}</p>
        <p>{created_at}</p>
        <p>{votes} votes</p>
        <p>{comment_count} comments</p>
        <Link to={`/reviews/${review_id}`}>Read</Link>
    </section>)

}

export default ReviewListItem