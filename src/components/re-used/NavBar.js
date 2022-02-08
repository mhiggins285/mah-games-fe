import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const NavBar = (props) => {

    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

    let logInLines = <li><Link to="/log-in">Log In</Link></li>

    const logOut = () => {

        setCurrentUser('')

    }

    if (currentUser !== '' && currentUser !== undefined) {

        logInLines = <section>
            <li><button type='button' onClick={logOut}>Log Out</button></li>
            <li>Logged in as: {currentUser}</li>
        </section>


    }

    return(<ul>
        <li><Link to="/">Home</Link></li>
        {logInLines}
    </ul>)

}

export default NavBar