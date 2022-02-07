const ErrorMessage = ({errorDetails}) => {

    if (errorDetails.message) {

        return(<section>{errorDetails.message}</section>)

    } else {

        return ('')

    }

}

export default ErrorMessage