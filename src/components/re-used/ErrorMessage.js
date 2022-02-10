import '../../css/App.css'

const ErrorMessage = ({errorDetails}) => {

    if (errorDetails.message) {

        return(<p className='error-message'>{errorDetails.message}</p>)

    } else {

        return ('')

    }

}

export default ErrorMessage