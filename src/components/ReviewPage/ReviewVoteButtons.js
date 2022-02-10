import { patchReviewVotes } from '../../utils/api'

import '../../css/App.css'

const ReviewVoteButtons = ({setVoteChange, voteChange, review_id}) => {

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
        <button onClick={handleLike} className='like-button' disabled={voteChange === 1}>Like</button>
        <button onClick={handleDislike} className='dislike-button' disabled={voteChange === -1}>Dislike</button>
    </section>)

}

export default ReviewVoteButtons