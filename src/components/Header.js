import './styles/header.css';
import {Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <nav>
        <div className="pageTitle" ><b>BusTiming.in</b></div>
        <ul className='uli'>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/busroutes'>Routes</Link></li>
          <li><Link to='/aboutus'>About us</Link></li>
          <li><Link to='/contactus'>Contact us</Link></li>
          <li><Link to='/signin'>Sign in</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
