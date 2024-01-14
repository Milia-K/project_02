import './header.scss'
import logo from './logo.png'
import logo2 from './logo2.png'
import Navigation from './Navigation';
import { useHistory } from 'react-router-use-history'



function Header(){

const history = useHistory();
const handleClickLogo = () => {
    history.push('/');
}

    return(
        <header className='Header'>
            <img src={logo2} className='logo' alt='logo' onClick={handleClickLogo} ></img>
            <div className='Header-text'>            
                <h1>my dictionary</h1>
                <h2> It is never too late to learn </h2>
                <Navigation  />
            </div>
        </header>
    )
}
export default Header;