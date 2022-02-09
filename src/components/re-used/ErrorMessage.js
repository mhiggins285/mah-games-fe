const ErrorMessage = ({errorDetails}) => {

    if (errorDetails.message) {

        return(<section className='error-message'>{errorDetails.message}</section>)

    } else {

        return ('')

    }

}

export default ErrorMessage