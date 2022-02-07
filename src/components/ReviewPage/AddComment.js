import { useState, useContext } from 'react'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const AddComment = ({setComments, setErrorDetails}) => {

    const { currentUser } = useContext(CurrentUserContext);

    const [commentBody, setCommentBody] = useState('')

    return(<section>AddComment</section>)

}

export default AddComment