import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import '../../css/App.css'

const NavBar = () => {

    const navigate = useNavigate()

    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

    const handleSelfClick = () => {

        navigate(`/users/${currentUser}`)

    }

    const logOut = () => {

        setCurrentUser(undefined)

    }

    if (currentUser) {

        return (<nav className='nav-bar--logged-in'>
            <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><button type='button' onClick={logOut}>Log Out</button></li>
            </div>
            <li className='current-user' onClick={handleSelfClick}>user: {currentUser}</li>
        </nav>)

    }

    return (<nav className='nav-bar'>
        <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
        <li><Link to="/log-in">Log In</Link></li>
    </nav>)

}

export default NavBar