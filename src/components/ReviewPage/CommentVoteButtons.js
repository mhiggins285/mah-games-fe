import { patchCommentVotes } from '../../utils/api'

import '../../css/App.css'

const CommentVoteButtons = ({setVoteChange, voteChange, comment_id}) => {

    const handleLike = () => {

        patchCommentVotes(comment_id, 1)
        
        setVoteChange((oldVoteChange) => {

            return oldVoteChange + 1

        })

    }

    const handleDislike = () => {

        patchCommentVotes(comment_id, -1)
        
        setVoteChange((oldVoteChange) => {

            return oldVoteChange - 1

        })
        
    }

    return (<section className='like-dislike-button-container'>
        <button onClick={handleLike} className='like-button' disabled={voteChange === 1}>Like</button>
        <button onClick={handleDislike} className='dislike-button' disabled={voteChange === -1}>Dislike</button>
    </section>)

}

export default CommentVoteButtons