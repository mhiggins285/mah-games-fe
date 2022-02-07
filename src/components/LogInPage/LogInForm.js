import { useState, useContext } from 'react'

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

const LogInForm = ({setErrorDetails}) => {

    const { setCurrentUser } = useContext(CurrentUserContext);

    const [logInInput, setLogInInput] = useState('')

    return(<section>LogInForm</section>)

}

export default LogInForm