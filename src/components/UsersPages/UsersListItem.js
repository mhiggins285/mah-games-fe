import { useNavigate } from 'react-router-dom'

import defaultAvatar from '../../images/neutral-grey.png'

import '../../css/App.css'

const UsersListItem = ({user, borderColour, isLoading = false}) => {

    const navigate = useNavigate()

    const {username, name} = user

    let {avatar_url} = user

    const handleUserClick = () => {

        navigate(`/users/${username}`)

    }

    let borderStyle = ''

    switch (borderColour) {

        case 0:
            borderStyle = 'blue-border'
            break
        case 1:
            borderStyle = 'green-border'
            break
        case 2:
            borderStyle = 'red-border'
            break
        case 3:
            borderStyle = 'yellow-border'
            break

    }

    if (avatar_url === '') {

        avatar_url = defaultAvatar

    }

    return(<li className={`user-box ${borderStyle}`} onClick={handleUserClick} hidden={isLoading}>
        <img alt={`${username}'s avatar`} src={avatar_url}/>
        <h4>{username}</h4>
        <p>{name}</p>
    </li>)

}

export default UsersListItem