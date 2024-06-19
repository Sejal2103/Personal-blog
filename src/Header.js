
import { Link } from 'react-router-dom';
// import Search from './Search';

const Header = ({ title }) => {
    return (
        <header className="header">
            <div className='header-content'>
                <div className="title-section">
                    <p className='playwrite-fr-moderne-title'>{title}</p>
                    <p className="subTitle">Welcome to your personal blog</p>
                </div>
                <nav className="nav">
                    <ul className='ul'>
                        <li><Link to='/'>Home</Link></li> 
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
