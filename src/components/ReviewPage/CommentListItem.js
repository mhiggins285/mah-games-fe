import { useContext } from 'react'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const CommentListItem = (props) => {

    const { currentUser } = useContext(CurrentUserContext);

    return(<section>CommentListItem</section>)

}

export default CommentListItem
