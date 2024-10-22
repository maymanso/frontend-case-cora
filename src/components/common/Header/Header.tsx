import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../../assets/logo.svg'
import { ReactNode } from 'react';

import './header.style.css'
import useAuthStore from '../../../store/auth/auth.store';


interface HeaderProps {
  isLogin: boolean;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ isLogin, children }) => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    return navigate('/')
  }
  return (
    <>
      <header className='header'>
        <nav className='header__nav'>
          <Link to="/" >
            <img src={logoImage} className='header__logo' />
          </Link>
          {isLogin ?
            <button className='header__button' onClick={handleLogout}>
              logout
            </button>
            :
            null}
        </nav>
      </header>
      <section>
        {children}
      </section>
    </>
  )
};

export default Header;