import { useState, useEffect } from 'react'

import ReviewListItem from "./ReviewListItem"

const ReviewList = ({categoryFilter}) => {

    const [reviews, setReviews] = useState([])

    return(<section>ReviewList
        <ReviewListItem/>
    </section>)

}

export default ReviewList