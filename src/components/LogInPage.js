import { useState, useEffect } from 'react'

import LogInForm from "./LogInPage/LogInForm"
import RegisterForm from "./LogInPage/RegisterForm"
import ErrorMessage from "./re-used/ErrorMessage"

const LogInPage = (props) => {

    const [errorDetails, setErrorDetails] = useState({})

    return(<section>LogInPage
        <LogInForm setErrorDetails={setErrorDetails}/>
        <RegisterForm setErrorDetails={setErrorDetails}/>
        <ErrorMessage errorDetails={errorDetails}/>
    </section>)

}

export default LogInPage