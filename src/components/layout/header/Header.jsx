import "./Header.scss"
import homeIcon from "../../../assets/icons/wealth-health.png"
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    return (

        <header className="header">
            <nav className="nav">
                <NavLink to='/'>
                    <img className="home-icon" src={homeIcon} alt="Home Icon" />
                </NavLink>
                {
                    location.pathname === '/' ?
                        <h1 className="page-title">Create Employee</h1> :
                        <h1 className="page-title">Current Employees</h1>
                }
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
    );

}

export default Header;