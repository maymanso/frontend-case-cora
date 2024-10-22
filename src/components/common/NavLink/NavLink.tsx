import { ReactNode } from "react";
import { Link } from "react-router-dom";

import './navLink.style.css'

interface NavLinkProps {
  url: string;
  children: ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ url, children }) => {
  return (
    <Link to={url} className="nav__link" >
      {children}
    </Link>
  )
};

export default NavLink;