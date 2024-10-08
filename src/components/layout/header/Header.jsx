import "./Header.scss"
import homeIcon from "/wealth-health.svg"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
<>
        <header className="header">
            <nav className="nav">
                <NavLink to='/'>
                    <img className="home-icon" width={'80'} height={'81'} src={homeIcon} alt="Home Icon" />
                </NavLink>
                <h1 className="page-title">HRnet</h1>
                <div className="hamburger"
                    onClick={
                        () => {
                            const sideLinks = document.querySelector('.side-links');
                            sideLinks.classList.toggle('responsive');
                        }
                    }
                ></div>
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