import { Link } from 'react-router-dom'

const ReviewListItem = ({review}) => {

    const {review_id, title, owner, review_img_url, category, created_at, votes} = review

    return(<section>ReviewListItem
        <h2>{title}</h2>
        <p>{owner}</p>
        <img src={review_img_url}/>
        <p>{category}</p>
        <p>{created_at}</p>
        <p>{votes}</p>
        <Link to={`/reviews/${review_id}`}>Read</Link>
    </section>)

}

export default ReviewListItem