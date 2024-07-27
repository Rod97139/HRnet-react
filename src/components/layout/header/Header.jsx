import "./Header.scss"

import {Link, useNavigate} from "react-router-dom";
import argentBankLogo from "../../../assets/icons/argentBankLogo.png";
import '@fortawesome/fontawesome-free/css/all.css'
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDetailsQuery } from "../../../service/authService";
import { useEffect, useState } from "react";
import { logout, setCredentials } from "../../../slices/authSlice";

const Header = () => {

    return (

        <header className="header">
            <nav class="title">
                <h1>HRnet</h1>
            </nav>
        </header>
    );

}

export default Header;