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

    return (<section>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleDislike}>Dislike</button>
    </section>)

}

export default ReviewVoteButtons