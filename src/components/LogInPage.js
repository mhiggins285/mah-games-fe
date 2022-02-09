import { useState, useContext, useEffect } from 'react'

import { CurrentUserContext } from '../contexts/CurrentUserContext'

import LogInForm from "./LogInPage/LogInForm"
import RegisterForm from "./LogInPage/RegisterForm"
import ErrorMessage from "./re-used/ErrorMessage"

import '../css/App.css'

const LogInPage = (props) => {

    const { currentUser } = useContext(CurrentUserContext)

    const [errorDetails, setErrorDetails] = useState({})

    if (currentUser) {

        return (<h3>You are currently logged in. If you would like to log in as another user, please first log out.</h3>)

    }

    return (<section className='log-in-page'>
        <LogInForm setErrorDetails={setErrorDetails}/>
        Not yet signed up?
        <RegisterForm setErrorDetails={setErrorDetails}/>
        <ErrorMessage errorDetails={errorDetails}/>
    </section>)

}

export default LogInPage