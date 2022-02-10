import errorImage from '../images/crying-red-transparent.png'

import '../css/App.css'

const ErrorPage = () => {

    return(<section className='error-page'>
            <img src={errorImage}/>
            <h3 className='error-message'>404 Error: Page not found</h3>
        </section>)

}

export default ErrorPage