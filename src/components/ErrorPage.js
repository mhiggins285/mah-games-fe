import errorImage from '../images/crying-red-transparent.png'

const ErrorPage = () => {

    return(<section className='error-page'>
            <img src={errorImage}/>
            <h3 className='error-message'>404 error: Page not found</h3>
        </section>)

}

export default ErrorPage