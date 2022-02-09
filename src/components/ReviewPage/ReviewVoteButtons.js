import { patchReviewVotes } from '../../utils/api'

const ReviewVoteButtons = ({setVoteChange, review_id}) => {

    const handleLike = () => {

        patchReviewVotes(review_id, 1)
        
        setVoteChange((oldVoteChange) => {

            return oldVoteChange + 1

        })

    }

    const handleDislike = () => {

        patchReviewVotes(review_id, -1)
        
        setVoteChange((oldVoteChange) => {

            return oldVoteChange - 1

        })
        
    }

    return (<section className='like-dislike-button-container'>
        <button onClick={handleLike} className='like-button'>Like</button>
        <button onClick={handleDislike} className='dislike-button'>Dislike</button>
    </section>)

}

export default ReviewVoteButtons