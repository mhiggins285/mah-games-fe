import { useState, useContext } from 'react'

import { postComment } from '../../utils/api'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import '../../css/App.css'

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
    
    return (<section className='add-comment-section'>
        <h3 className='background-header'>Post Comment</h3>
        <form className={currentUser ? 'add-comment--enabled' : 'add-comment--disabled'} onSubmit={(event) => handlePostComment(event)}>
            <textarea cols='50' type='text' value={commentBody} disabled={!currentUser} placeholder={currentUser ? 'Write comment...' : 'Please log in to post comment'} onChange={handleCommentChange}/>
            <button disabled={!currentUser}>Submit</button>
        </form>
    </section>)

}

export default AddComment