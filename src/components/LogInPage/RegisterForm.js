import { useState, useContext } from 'react'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const RegisterForm = ({setErrorDetails}) => {

    const registerInputEmptyObject = {
        username: '',
        name: '',
        avatar_url: ''
    }

    const [registerInput, setRegisterInput] = useState(registerInputEmptyObject)

    return(<section>RegisterForm</section>)

}

export default RegisterForm