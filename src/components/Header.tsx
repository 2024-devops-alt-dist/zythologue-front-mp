import { NavLink } from "react-router";
import "../components/Header.css"

function Header({ company, menu1, menu2, menu3 }: { company: string; menu1: string; menu2: string; menu3: string }) {
    return (
      <div className="header">
        <a href="/" className="logo"> {company}</a>
        <div className="header-right">
            <NavLink to="/beers" className="active">{menu1}</NavLink>
            <a href="#contact">{menu2}</a>
            <a href="#about">{menu3}</a>
        </div>
      </div>
    );
  }
  
  export default Header;