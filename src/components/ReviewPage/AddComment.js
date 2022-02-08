import { useState, useContext } from 'react'

import { postComment } from '../../utils/api'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const AddComment = ({setCommentsArray, setErrorDetails, review_id, setCommentChange}) => {

    const { currentUser } = useContext(CurrentUserContext);

    const [commentBody, setCommentBody] = useState('')

    const handleCommentChange = (event) => {

        setCommentBody(event.target.value)

    }

    const handlePostComment = (event) => {

        event.preventDefault()

        if (commentBody === '') {

            setErrorDetails({message: 'Please enter comment body'})

        } else if (commentBody.length > 1000) {

            setErrorDetails({message: 'Comment too long, max length: 1000'})

        } else {

            postComment(review_id, currentUser, commentBody)
                .then((postedComment) => {

                    setCommentsArray((oldComments) => {

                        const newComments = [...oldComments]
                        newComments.push(postedComment)
                        return newComments

                    })

                    setCommentBody('')
                    setCommentChange((oldCommentChange) => {
                        return oldCommentChange + 1
                    })
                    setErrorDetails({})

                })

        }

    }
    
    const isUserLoggedIn = currentUser !== '' && currentUser !== undefined

    return (<section>
        <h3>Post Comment</h3>
        <form onSubmit={(event) => handlePostComment(event)}>
            <label>Comment Body
            <input type='text' value={commentBody} disabled={!isUserLoggedIn} placeholder={isUserLoggedIn ? 'Write comment...' : 'Please log in to post comment'} onChange={handleCommentChange}/></label>
            <input disabled={!isUserLoggedIn} type='submit'/>
        </form>
    </section>)

}

export default AddComment