import "./Header.scss"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
<>
        <header className="header">
            <nav className="nav">
                <NavLink to='/'>
                    <img className="home-icon" width={'80'} height={'81'} src={'/wealth-health.svg'} alt="Home Icon" />
                </NavLink>
                <h1 className="page-title">HRnet</h1>
                <div className="hamburger"
                    onClick={
                        () => {9908256880733945
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