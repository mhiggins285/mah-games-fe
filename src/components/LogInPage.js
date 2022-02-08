import { useState, useContext, useEffect } from 'react'

import { CurrentUserContext } from '../contexts/CurrentUserContext'

import LogInForm from "./LogInPage/LogInForm"
import RegisterForm from "./LogInPage/RegisterForm"
import ErrorMessage from "./re-used/ErrorMessage"

const LogInPage = (props) => {

    const { currentUser } = useContext(CurrentUserContext)

    const [errorDetails, setErrorDetails] = useState({})

    if (currentUser !== '' && currentUser !== undefined) {

        return (<h3>You are currently logged in. If you would like to log in as another user, please first log out.</h3>)

    }

    return (<section>
        <LogInForm setErrorDetails={setErrorDetails}/>
        <RegisterForm setErrorDetails={setErrorDetails}/>
        <ErrorMessage errorDetails={errorDetails}/>
    </section>)

}

export default LogInPage