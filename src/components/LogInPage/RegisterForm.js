import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { getUsernames, postUser } from '../../utils/api'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import '../../css/App.css'

const RegisterForm = ({setErrorDetails}) => {

    const { setCurrentUser } = useContext(CurrentUserContext)

    const registerInputEmptyObject = {
        username: '',
        name: '',
        avatar_url: ''
    }

    const [registerInput, setRegisterInput] = useState(registerInputEmptyObject)

    const navigate = useNavigate()

    const handleRegisterChange = (event) => {

        const targetName = event.target.name
        const value = event.target.value

        setRegisterInput((oldRegisterInput) => {

            const newRegisterInput = {...oldRegisterInput}
            newRegisterInput[targetName] = value
            return newRegisterInput

        })

    }

    const handleRegister = (event) => {

        event.preventDefault()

        if (registerInput.username === '') {

            setErrorDetails({message: 'Please enter username'})

        } else if (registerInput.username.length > 25) {

            setErrorDetails({message: 'Username too long, max length: 25'})

        } else if (registerInput.name.length > 50) {

            setErrorDetails({message: 'Name too long, max length: 50'})

        } else if (registerInput.avatar_url.length > 200) {

            setErrorDetails({message: 'Avatar URL too long, max length: 200'})

        } else {

            getUsernames()
                .then((usernames) => {

                    if (usernames.includes(registerInput.username)) {

                        setErrorDetails({message: 'Username already taken'})

                    } else {

                        return postUser(registerInput.username, registerInput.name, registerInput.avatar_url)
                            .then(() => {

                                setCurrentUser(registerInput.username)
            
                                setErrorDetails({})

                                navigate('/')
            
                            })

                    }

                })

        }

    }

    return(<section className='log-in-box yellow-border'>
        <h3>Register</h3>
        <form onSubmit={(event) => handleRegister(event)}>
            <label>Username
            <input type='text' name='username' value={registerInput.username} placeholder='Username' onChange={handleRegisterChange}/></label>
            <label>Name
            <input type='text' name='name' value={registerInput.name} placeholder='Name' onChange={handleRegisterChange}/></label>
            <label>Avatar URL
            <input type='text' name='avatar_url' value={registerInput.avatar_url} placeholder='Avatar URL' onChange={handleRegisterChange}/></label>
            <button type='submit'>Submit</button>
        </form>
    </section>)

}

export default RegisterForm