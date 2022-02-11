import { useState, useEffect } from 'react'

import { getCommentsByReview } from '../../utils/api'

import OptionBox from '../re-used/OptionBox'
import CommentListItem from './CommentListItem'

import '../../css/App.css'

const CommentList = ({commentsArray, setCommentsArray, review_id, setCommentChange}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [sortByQuery, setSortByQuery] = useState('created_at')
    const [orderQuery, setOrderQuery] = useState('desc')

    useEffect(() => {

        setIsLoading(true)

        getCommentsByReview(review_id)
            .then((comments) => {

                if (orderQuery === 'desc') {

                    comments.sort((a, b) => {

                        if (sortByQuery === 'created_at') {

                            return ((new Date(b[sortByQuery]).getTime()) - (new Date(a[sortByQuery]).getTime()))

                        }
                        
                        return b[sortByQuery] - a[sortByQuery]})

                } else {

                    comments.sort((a, b) => {

                        if (sortByQuery === 'created_at') {

                            return ((new Date(a[sortByQuery]).getTime()) - (new Date(b[sortByQuery]).getTime()))

                        }

                        return a[sortByQuery] - b[sortByQuery]})

                }

                setCommentsArray(comments)
                setIsLoading(false)

            })

    }, [review_id, orderQuery, sortByQuery])

    return(<section className='comment-list'>
        <h2 className='background-header'>Comments</h2>
        <OptionBox setSortByQuery={setSortByQuery} setOrderQuery={setOrderQuery}/>
        <h2 className='background-header' hidden={!isLoading}>Loading...</h2>
        {commentsArray.map((comment, index) => {
            return (<CommentListItem key={comment.comment_id} comment={comment} setCommentsArray={setCommentsArray} setCommentChange={setCommentChange} borderColour={index % 4}/>)
        })}
    </section>)

}

export default CommentList