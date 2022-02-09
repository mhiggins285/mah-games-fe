import { useState, useContext, useEffect } from 'react'

import { deleteComment, getUserAvatar } from '../../utils/api'

import { formatDate } from '../../utils/format'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const CommentListItem = ({ comment, setCommentsArray, setCommentChange, borderColour }) => {

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

    let borderStyle = ''

    switch (borderColour) {

        case 0:
            borderStyle = 'green-border'
            break
        case 1:
            borderStyle = 'red-border'
            break
        case 2:
            borderStyle = 'yellow-border'
            break
        case 3:
            borderStyle = 'blue-border'
            break

    }

    let deleteButton = ''

    if (currentUser === author) {

        deleteButton = <button onClick={handleDeleteComment}>Delete Comment</button>

    }

    return(<section className={`review-comment ${borderStyle}`}>
        <section className={`comment-author ${borderStyle}`}>
            <img alt={`${author}'s avatar`} src={authorAvatar}/>
            <p>{author}</p>
        </section>
        <p className='comment-body'>{body}</p>
        <p className='comment-timestamp'>{}</p>
        <p className='comment-votes'>{votes} votes</p>
        {formatDate(created_at)}
        {deleteButton}
    </section>)

}

export default CommentListItem
