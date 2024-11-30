import './styles/header.css';
import {Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <nav>
        <div className="pageTitle" ><b>BusTiming.in</b></div>
        <ul className='uli'>
          <li><Link to="demo-react/">Home</Link></li>
          <li><Link to='demo-react/busroutes'>Routes</Link></li>
          <li><Link to='demo-react/aboutus'>About us</Link></li>
          <li><Link to='demo-react/contactus'>Contact us</Link></li>
          <li><Link to='demo-react/signin'>Sign in</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
