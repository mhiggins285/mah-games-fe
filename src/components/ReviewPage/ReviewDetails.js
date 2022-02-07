import { useState } from 'react'

import ReviewVoteButtons from "./ReviewVoteButtons"

const ReviewDetails = (props) => {

    const [voteChange, setVoteChange] = useState(0)

    return(<section>ReviewDetails
        <ReviewVoteButtons setVoteChange={setVoteChange}/>
    </section>)

}

export default ReviewDetails