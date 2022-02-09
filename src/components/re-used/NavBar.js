import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import '../../css/NavBar.css'

const NavBar = (props) => {

    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

    const logOut = () => {

        setCurrentUser(undefined)

    }

    if (currentUser) {

        return (<ul className='nav-bar--logged-in'>
            <div>
            <li><Link to="/">Home</Link></li>
            <li><button type='button' onClick={logOut}>Log Out</button></li>
            </div>
            <li>user: {currentUser}</li>
        </ul>)

    }

    return (<ul className='nav-bar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/log-in">Log In</Link></li>
    </ul>)

}

export default NavBar