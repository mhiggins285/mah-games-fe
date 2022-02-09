import '../../css/App.css'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {

    const navigate = useNavigate()

    const handleHeaderClick = () => {

        navigate('/')

    }

    return(<h1 className='header' onClick={handleHeaderClick}><span className='blue'>M</span><span className='green'>A</span><span className='red'>H</span> <span className='yellow'>Games</span></h1>)

}

export default Header