import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import '../../css/App.css'

const NavBar = () => {

    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

    const logOut = () => {

        setCurrentUser(undefined)

    }

    if (currentUser) {

        return (<nav className='nav-bar--logged-in'>
            <div>
            <li><Link to="/">Home</Link></li>
            <li><button type='button' onClick={logOut}>Log Out</button></li>
            </div>
            <li>user: {currentUser}</li>
        </nav>)

    }

    return (<nav className='nav-bar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/log-in">Log In</Link></li>
    </nav>)

}

export default NavBar