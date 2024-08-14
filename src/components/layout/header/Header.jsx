import "./Header.scss"
import homeIcon from "../../../assets/icons/wealth-health.png"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
<>
        <header className="header">
            <nav className="nav">
                <NavLink to='/'>
                    <img className="home-icon" src={homeIcon} alt="Home Icon" />
                </NavLink>
                <h1 className="page-title">HRnet</h1>
                <div className="side-links">
                    <NavLink to ='/' >
                        create employee
                    </NavLink>
                    <NavLink to ='/employee-list' >
                        view current employees
                    </NavLink>
                </div>
            </nav>
        </header>
        <hr className="header-hr" />
        </>
        
    );

}

export default Header;