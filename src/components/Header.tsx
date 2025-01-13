function Header({ company, menu1, menu2, menu3 }: { company: string; menu1: string; menu2: string; menu3: string }) {
    return (
      <div className="header">
        <a href="#default" className="logo"> {company}</a>
        <div className="header-right">
            <a href="#home" className="active">{menu1}</a>
            <a href="#contact">{menu2}</a>
            <a href="#about">{menu3}</a>
        </div>
      </div>
    );
  }
  
  export default Header;