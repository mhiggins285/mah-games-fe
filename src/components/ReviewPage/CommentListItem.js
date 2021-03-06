import { useState, useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { deleteComment, getUserAvatar } from '../../utils/api'

import { formatDate } from '../../utils/format'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import CommentVoteButtons from './CommentVoteButtons'

import defaultAvatar from '../../images/neutral-grey.png'

import '../../css/App.css'

const CommentListItem = ({ comment, setCommentsArray, setCommentChange, borderColour }) => {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUserContext);

    const [ authorAvatar, setAuthorAvatar ] = useState(defaultAvatar)
    const [ voteChange, setVoteChange ] = useState(0)

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

    const handleUserClick = () => {

        navigate(`/users/${comment.author}`)

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

    let buttons = <CommentVoteButtons setVoteChange={setVoteChange} voteChange={voteChange} comment_id={comment_id}/>

    if (currentUser === author) {

        buttons = <button onClick={handleDeleteComment} className='delete-comment-button'>Delete Comment</button>

    } 

    return(<section className={`review-comment ${borderStyle}`}>
        <section className={`comment-author ${borderStyle}`} onClick={handleUserClick}>
            <img alt={`${author}'s avatar`} src={authorAvatar}/>
            <p>{author}</p>
        </section>
        <p className='comment-body'>{body}</p>
        <p className='comment-timestamp'>{}</p>
        <p className='comment-votes'>{votes + voteChange} votes</p>
        {formatDate(created_at)}
        <div className='comment-button-container'>{buttons}</div>
    </section>)

}

export default CommentListItem
