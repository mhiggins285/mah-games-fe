import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const NavBar = (props) => {

    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    return(<section>NavBar</section>)

}

export default NavBar