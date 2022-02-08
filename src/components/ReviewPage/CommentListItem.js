import { useState, useContext, useEffect } from 'react'

import { deleteComment, getUserAvatar } from '../../utils/api'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const CommentListItem = ({ comment, setCommentsArray, setCommentChange }) => {

    const { currentUser } = useContext(CurrentUserContext);

    const [ authorAvatar, setAuthorAvatar] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png')

    const { comment_id, author, votes, created_at, body } = comment

    const handleDeleteComment = () => {

        deleteComment(comment_id)
            .then(() => {

                setCommentsArray((oldCommentsArray) => {

                    const newCommentsArray = oldCommentsArray.filter((comment) => {
                        return comment.comment_id !== comment_id
                    })
                    return newCommentsArray

                })

                setCommentChange((oldCommentChange) => {

                    return oldCommentChange - 1

                })

            })

    }

    useEffect(() => {

        getUserAvatar(author)
            .then((avatar) => {

                if (avatar !== '' && avatar !== undefined) {

                    setAuthorAvatar(avatar)

                }

            })

    }, [])

    let deleteButton = ''

    if (currentUser === author) {

        deleteButton = <button onClick={handleDeleteComment}>Delete Comment</button>

    }

    return(<section>Comment
        <p>{author}</p>
        <img alt={`${author}'s avatar`} src={authorAvatar}/>
        <p>{body}</p>
        <p>{created_at}</p>
        <p>{votes} votes</p>
        {deleteButton}
    </section>)

}

export default CommentListItem
