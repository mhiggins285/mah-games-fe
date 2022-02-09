import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { getUsernames } from '../../utils/api'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const LogInForm = ({setErrorDetails}) => {

    const { setCurrentUser } = useContext(CurrentUserContext)

    const [logInInput, setLogInInput] = useState('')

    const navigate = useNavigate()

    const handleLogInChange = (event) => {

        setLogInInput(event.target.value)

    }
    
    const handleLogIn = (event) => {

        event.preventDefault()

        getUsernames()
            .then((usernames) => {

                if (usernames.includes(logInInput)) {

                    setCurrentUser(logInInput)

                    setErrorDetails({})

                    navigate('/')

                } else {

                    setErrorDetails({message: 'User does not exist'})

                }

            })

    }

    return(<section className='log-in-box green-border'>
        <h3>Log In</h3>
        <form onSubmit={(event) => handleLogIn(event)}>
            <label>Username
            <input type='text' value={logInInput} placeholder='Username' onChange={handleLogInChange}/></label>
            <button type='submit'>Submit</button>
        </form>
    </section>)

}

export default LogInForm