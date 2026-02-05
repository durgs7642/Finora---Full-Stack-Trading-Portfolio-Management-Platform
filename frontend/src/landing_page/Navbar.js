import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

    return ( 
         <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFFF"}}>
  <div className="container p-2">
    <Link className="navbar-brand" to="/"> 
    <img src='media/images/logo.svg' alt='logo' style={{width:"23%"}}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex" role="search">
        <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active text-muted" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-muted" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item         ">
          <Link className="nav-link active text-muted" aria-current="page" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link active text-muted" aria-current="page"  to="/pricing">
            Pricing
          </Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link active text-muted" aria-current="page" to="/support">
            Support
          </Link>
        </li>
        <li className='nav-item'>
        <a className="nav-link active hamburger" aria-current="page" href="#" onClick={toggleMenu}><i class="fa-solid fa-bars fs-5"></i>
           </a>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>

     );
}

export default Navbar;