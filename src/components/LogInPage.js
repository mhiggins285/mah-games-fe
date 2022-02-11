import { useState, useContext } from 'react'

import { CurrentUserContext } from '../contexts/CurrentUserContext'

import LogInForm from "./LogInPage/LogInForm"
import RegisterForm from "./LogInPage/RegisterForm"
import ErrorMessage from "./re-used/ErrorMessage"

import '../css/App.css'

const LogInPage = () => {

    const { currentUser } = useContext(CurrentUserContext)

    const [errorDetails, setErrorDetails] = useState({})

    if (currentUser) {

        return (<h3 className='background-header'>You are currently logged in. If you would like to log in as another user, please first log out.</h3>)

    }

    return (<section className='log-in-page'>
        <LogInForm setErrorDetails={setErrorDetails}/>
        <p className='background-text'>Not yet signed up?</p>
        <RegisterForm setErrorDetails={setErrorDetails}/>
        <ErrorMessage errorDetails={errorDetails}/>
    </section>)

}

export default LogInPage