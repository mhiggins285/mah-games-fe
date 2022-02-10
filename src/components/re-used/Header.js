import '../../css/App.css'
import { useNavigate } from 'react-router-dom'
import logo from "../../images/logo-transparent-background.png"

const Header = (props) => {

    const navigate = useNavigate()

    const handleHeaderClick = () => {

        navigate('/')

    }

    return(<header className='header'>
        <h1 className='header-text' onClick={handleHeaderClick}><span className='blue'>M</span><span className='green'>A</span><span className='red'>H</span> <span className='yellow'>Games</span></h1>
        <img className='header-logo' src={logo}/>
        </header>)

}

export default Header