import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

   
    <nav className="navbar">


      <a href="/">
      
      <img className="logo1"
        src="../src/assets/logo/legekrogen_logo.png"
        alt="legekrogLogo"
      />
      </a>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
    

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/productpage">Produkter</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
      
        <li>
          <NavLink to="/memberspage">Kundeklubben</NavLink>
        </li>
      </ul>


    </nav>
  );
};

export default Navigation;
